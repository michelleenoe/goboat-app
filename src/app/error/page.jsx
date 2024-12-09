"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useLanguage } from "../lib/context/language"; // Genbrug sproghåndtering fra gammel kode
import ErrorDropdown from "../components/error/ErrorDropdown";
import Solutions from "../components/error/Solutions";
import VideoHelp from "../components/error/VideoHelp";
import ImageSlider from "../components/error/ImageSlider";

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
          setData(errorCodes);
          setSelectedError(errorCodes[0]); // Vælg første fejl som standard
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

  const title =
    language === "da" ? selectedError.da_title : selectedError.eng_title; // Dynamisk titel baseret på sprog

  return (
    <div className="p-4 space-y-4">
      <h1 className="sr-only">TITLE</h1>
      <h2 className="text-xl font-bold">{`${selectedError.e_codes} - ${title}`}</h2>
      <ErrorDropdown
        data={data}
        language={language}
        onSelect={setSelectedError}
      />
      <Solutions selectedError={selectedError} language={language} />
      <VideoHelp selectedError={selectedError} language={language} />
      <ImageSlider selectedError={selectedError} />
    </div>
  );
}
