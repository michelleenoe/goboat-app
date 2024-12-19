import { useState } from "react";
import Image from "next/image";
import errorData from "@/app/lib/content/errorData";
import PlayButton from "./PlayButton";
import CloseButton from "./CloseButton";

export default function SolutionsWithVideo({ selectedError, language }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoUrl = JSON.parse(
    selectedError[`${language === "da" ? "da" : "en"}_video_url`]
  )?.[0];
  const thumbnailUrl = JSON.parse(
    selectedError[`${language === "da" ? "da" : "en"}_video_thumbnail`]
  )?.[0];

  const renderSolutions = () => {
    return Array.from({ length: 5 }, (_, i) => {
      const solutionKey = `solution${i + 1}_${
        language === "da" ? "da" : "eng"
      }`;
      return (
        selectedError?.[solutionKey] && (
          <li className="text-typoPrimary" key={i}>
            {selectedError[solutionKey]}
          </li>
        )
      );
    }).filter(Boolean);
  };

  return (
    <div className="px-4">
      <div className="bg-grey1 py-6 px-4 rounded-2xl shadow-md max-w-xl mx-auto">
        <ul className="list-decimal pl-6 text-sm space-y-2">
          {renderSolutions()}
        </ul>

        {videoUrl && thumbnailUrl && (
          <div className="mt-6">
            <p className="font-semibold px-3 text-sm text-typoPrimary">
              {errorData[language].labels.needHelp}
            </p>
            <p className="text-typoPrimary text-sm pb-3 px-3">
              {errorData[language].titles.videoHelp}
            </p>
            <div className="flex justify-center items-center">
              <div
                className="relative overflow-hidden rounded-3xl shadow-md w-80 h-52 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
                role="button"
                aria-label="Open video"
              >
                <Image
                  src={thumbnailUrl}
                  alt={`Video thumbnail for ${
                    selectedError?.error_name || "the solution"
                  }`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />

                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <PlayButton onClick={() => setIsModalOpen(true)} />
                </div>
              </div>
            </div>
          </div>
        )}

        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            role="dialog"
            aria-labelledby="video-title"
          >
            <div className="bg-grey2 dark:bg-typoSecondary p-4 rounded-3xl shadow-lg w-full max-w-2xl relative">
              <CloseButton onClick={() => setIsModalOpen(false)} />
              <p id="video-title" className="sr-only">
                Video Help
              </p>
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-auto rounded-3xl"
              ></video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
