"use client"
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useLanguage } from "../lib/context/language";
import errorData from "../lib/content/errorData";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ErrorPage() {
  const { language } = useLanguage();
  const [data, setData] = useState([]);
  const [selectedError, setSelectedError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data: errorCodes, error } = await supabase
        .from("error_codes")
        .select("*");
      if (error) console.error("Error fetching data:", error);
      else {
        setData(errorCodes);
        setSelectedError(errorCodes[0]);
      }
    };

    fetchData();
  }, []);

  const handleSelectChange = (e) => {
    setSelectedError(data.find((item) => item.e_codes === e.target.value));
  };

  const renderContent = () => {
    if (!selectedError) return null;

    const title =
      language === "da" ? selectedError.da_title : selectedError.eng_title;
    const description =
      language === "da"
        ? selectedError.da_description
        : selectedError.eng_description;
    const videoUrl = JSON.parse(
      language === "da" ? selectedError.da_video_url : selectedError.en_video_url
    )?.[0];
    const images = selectedError.img_url ? JSON.parse(selectedError.img_url) : [];

    return (
      <div>
        <h2>
          {selectedError.e_codes} - {title}
        </h2>
        <p>{description}</p>

        {videoUrl && (
          <div>
            <h3>{errorData[language].titles.videoHelp}</h3>
            <video src={videoUrl} controls></video>
          </div>
        )}

        {images.length > 0 && (
          <div>
            <h3>{errorData[language].labels.solution}</h3>
            <div>
              {images.map((img, index) => (
                <img key={index} src={img} alt={`Solution step ${index + 1}`} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div>
        <label htmlFor="error-select">
          {errorData[language].labels.findErrorCode}
        </label>
        <select id="error-select" onChange={handleSelectChange}>
          {data.map((item) => (
            <option key={item.id} value={item.e_codes}>
              {item.e_codes} -{" "}
              {language === "da" ? item.da_title : item.eng_title}
            </option>
          ))}
        </select>
      </div>
      {renderContent()}
    </div>
  );
}
