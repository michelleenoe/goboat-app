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
import Information from "../components/error/Information";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ErrorPage() {
  const lang = getLanguage();
  const errordata = errorData[lang] || errorData.en;
  const { language } = useLanguage();
  const [data, setData] = useState([]);
  const [selectedError, setSelectedError] = useState(null);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderContent = () => {
    const solutionKey = `solution1_${language === "da" ? "da" : "eng"}`;
    const firstSolution = selectedError[solutionKey];

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
      {/* Header og layoutindhold fra parent layout forbliver synligt */}
      <div>
        <h1 className="px-4 text-xl font-bold mb-6">
          {errordata.labels.findErrorCode}
        </h1>
        {loading ? (
          <Skeleton height="40px" width="100%" />
        ) : (
          <ErrorDropdown
            data={data}
            language={language}
            onSelect={setSelectedError}
          />
        )}
      </div>

      <div className="flex flex-col items-center justify-center my-6">
        <h2 className="font-semibold mb-2">{errordata.labels.solution}</h2>
        {loading ? (
          <>
            <Skeleton height="25px" width="40%" className="mb-2" />
            <Skeleton height="20px" width="60%" />
          </>
        ) : (
          <p className="font-bold text-darkBlue dark:text-lightBlue">
            {`${selectedError.e_codes} - ${
              language === "da"
                ? selectedError.da_title
                : selectedError.eng_title
            }`}
          </p>
        )}
      </div>

      <div className="my-6">
        {loading ? (
          <Skeleton height="150px" width="100%" borderRadius="8px" />
        ) : (
          renderContent()
        )}
      </div>

      <Information />
    </div>
  );
}
