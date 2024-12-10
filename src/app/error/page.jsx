"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useLanguage } from "../lib/context/language";
import ErrorDropdown from "../components/error/ErrorDropdown";
import Solutions from "../components/error/Solutions";
import VideoHelp from "../components/error/VideoHelp";
import ImageSlider from "../components/error/ImageSlider";
import TechSupportSolutions from "../components/error/TechSupportSolutions";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ErrorPage() {
  const { language } = useLanguage(); // Henter aktuelt sprog fra konteksten
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
          // Sorter data efter laveste id
          const sortedErrorCodes = errorCodes.sort((a, b) => a.id - b.id);
          setData(sortedErrorCodes);
          setSelectedError(sortedErrorCodes[0]); // Vælg første fejl som standard
        }
      } catch (err) {
        console.error("Error during data fetching:", err);
      }
    };

    fetchData();
  }, []);

  if (!selectedError) {
    return <div>Indlæser fejloplysninger...</div>; // Loader, hvis der ikke er data
  }

  const renderContent = () => {
    if (selectedError.tech_support) {
      return (
        <TechSupportSolutions
          selectedError={selectedError}
          language={language}
        />
      );
    } else if (selectedError[`${language === "da" ? "da" : "en"}_video_url`]) {
      return (
        <div className="mb-8">
          <VideoHelp selectedError={selectedError} language={language} />;
        </div>
      );
    } else if (selectedError.img_url) {
      return (
        <div className="mb-8">
          <ImageSlider selectedError={selectedError} language={language} />;
        </div>
      );
    } else {
      return (
        <div className="mb-8">
          {" "}
          <Solutions selectedError={selectedError} language={language} />;
        </div>
      );
    }
  };

  return (
    <div className="">
      <h1 className="sr-only">Error Page</h1>

      <ErrorDropdown
        data={data}
        language={language}
        onSelect={setSelectedError}
      />
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-lg font-semibold py-4">
          {`${selectedError.e_codes} - ${
            language === "da" ? selectedError.da_title : selectedError.eng_title
          }`}
        </h3>
      </div>

      <div>
        {selectedError.requires_support ? (
          <div className="flex flex-col items-center p-4 bg-gray-100 rounded-md">
            <p>
              This issue requires assistance from our technical support team.
            </p>
            <button
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md"
              onClick={() => console.log("Contact Support")}
            >
              Contact Support
            </button>
          </div>
        ) : (
          <div>{renderContent()}</div>
        )}
      </div>
    </div>
  );
}
