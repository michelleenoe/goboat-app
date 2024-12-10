import errorData from "@/app/lib/content/errorData";

export default function SolutionsWithVideo({ selectedError, language }) {
  // Funktion til at generere løsninger
  const renderSolutions = () => {
    return Array.from({ length: 5 }, (_, i) => {
      const solutionKey = `solution${i + 1}_${
        language === "da" ? "da" : "eng"
      }`;
      return (
        selectedError?.[solutionKey] && (
          <li key={i}>{selectedError[solutionKey]}</li>
        )
      );
    }).filter(Boolean);
  };

  // Hent video URL
  const videoUrl = JSON.parse(
    selectedError[`${language === "da" ? "da" : "en"}_video_url`]
  )?.[0];

  return (
    <div>
      {/* Løsninger */}
      <div>
        <h3 className="text-lg font-semibold">Løsninger:</h3>
        <ul className="list-none pl-5">{renderSolutions()}</ul>
      </div>

      {/* Video */}
      {videoUrl && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">
            {errorData[language].titles.videoHelp}
          </h3>
          <video src={videoUrl} controls className="mt-2 w-full"></video>
        </div>
      )}
    </div>
  );
}
