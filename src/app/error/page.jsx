"use client";
import { getLanguage } from "../lib/storage";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useLanguage } from "../lib/context/language";
import ErrorDropdown from "../components/error/ErrorDropdown";
import TechSolutions from "../components/error/TechSolutions";
import VideoHelp from "../components/error/VideoHelp";
import ImageSlider from "../components/error/ImageSlider";
import errorData from "../lib/content/errorData";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ErrorPage() {
  const lang = getLanguage();
  const errordata = errorData[lang] || errorData.en; // Brug det rigtige sæt labels baseret på sproget
  const { language } = useLanguage();
  const [data, setData] = useState([]);
  const [selectedError, setSelectedError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: errorCodes, error } = await supabase
          .from("error_codes")
          .select("*");
        if (error) {
          console.error("Error fetching data:", error);
        } else {
          const sortedErrorCodes = errorCodes.sort((a, b) => a.id - b.id);
          setData(sortedErrorCodes);
          setSelectedError(sortedErrorCodes[0]);
        }
      } catch (err) {
        console.error("Error during data fetching:", err);
      }
    };

    fetchData();
  }, []);

  if (!selectedError) {
    return <div>{errordata.labels.loading}</div>;
  }

  const renderContent = () => {
    // Dynamisk nøgle for den første løsning baseret på sprog
    const solutionKey = `solution1_${language === "da" ? "da" : "eng"}`;
    const firstSolution = selectedError[solutionKey]; // Udtræk første løsning

    if (selectedError[`${language === "da" ? "da" : "en"}_video_url`]) {
      return <VideoHelp selectedError={selectedError} language={language} />;
    } else if (selectedError.img_url) {
      return <ImageSlider selectedError={selectedError} language={language} />;
    } else {
      return <TechSolutions solution={firstSolution} errordata={errordata} />;
    }
  };

  return (
    <div>
      <h1 className="sr-only">Error Page</h1>
      <p className="text-xl font-bold mb-4">{errordata.labels.findErrorCode}</p>

      <ErrorDropdown
        data={data}
        language={language}
        onSelect={setSelectedError}
      />

      <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold py-4">
          {`${selectedError.e_codes} - ${
            language === "da" ? selectedError.da_title : selectedError.eng_title
          }`}
        </h2>
      </div>

      <h3 className="font-semibold mb-2">{errordata.labels.solution}</h3>
      <div className="mb-6">{renderContent()}</div>
    </div>
  );
}
