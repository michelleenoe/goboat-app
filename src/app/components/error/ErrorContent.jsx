import errorData from "@/app/lib/content/errorData";

export default function ErrorContent({ selectedError, language }) {
  const renderSolutions = () => {
    return Array.from({ length: 5 }, (_, i) => {
      const solutionKey = `solution${i + 1}_${
        language === "da" ? "da" : "eng"
      }`;
      return (
        selectedError?.[solutionKey] && (
          <li key={i}>
            {i + 1}. {selectedError[solutionKey]}
          </li>
        )
      );
    }).filter(Boolean);
  };

  const title =
    language === "da" ? selectedError.da_title : selectedError.eng_title;
  const videoUrl = JSON.parse(
    selectedError[`${language === "da" ? "da" : "en"}_video_url`]
  )?.[0];
  const images = selectedError.img_url ? JSON.parse(selectedError.img_url) : [];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">{`${selectedError.e_codes} - ${title}`}</h2>
      <div>
        <h3 className="text-lg font-semibold">Løsninger:</h3>
        <ul className="list-disc pl-5">{renderSolutions()}</ul>
      </div>
      {videoUrl && (
        <div>
          <h3 className="text-lg font-semibold">
            {errorData[language].titles.videoHelp}
          </h3>
          <video src={videoUrl} controls className="mt-2 w-full"></video>
        </div>
      )}
      {images.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold">Billeder:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Step ${index + 1}`}
                className="w-full rounded-md shadow-md"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
