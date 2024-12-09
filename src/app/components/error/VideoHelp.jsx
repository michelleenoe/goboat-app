import errorData from "@/app/lib/content/errorData";

export default function VideoHelp({ selectedError, language }) {
  const videoUrl = JSON.parse(
    selectedError[`${language === "da" ? "da" : "en"}_video_url`]
  )?.[0];

  if (!videoUrl) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold">
        {errorData[language].titles.videoHelp}
      </h3>
      <video src={videoUrl} controls className="mt-2 w-full"></video>
    </div>
  );
}
