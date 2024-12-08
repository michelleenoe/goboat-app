"use client";
import { getLanguage } from "../app/lib/storage";
import TipsSlider from "./components/tips/TipsSlider";
import tipsData from "./lib/content/tipsData";
import FAQ from "./components/faq/FAQ";
import Weather from "./components/weather/Weather";
import faqData from "./lib/content/faqData";
import titleData from "./lib/content/titleData";
import weatherData from "./lib/content/weatherData";

export default function DashboardPage() {
  const lang = getLanguage();

  const tips = tipsData[lang] || tipsData.en;
  const faq = faqData[lang] || faqData.en; 
  const title = titleData[lang] || titleData.en; 
  // const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  const weather = weatherData[lang] || weatherData.en;

  return (
    <div>
      <h1 className="hidden">{title.homeTitle}</h1>
      <div className="mb-8">
        <Weather city="Copenhagen" weather={weather} />
      </div>
      <div className="mb-8">
        <TipsSlider mainTitle={tips.mainTitle} tips={tips.tips} />
      </div>

      <div className="mb-8">
        <FAQ mainTitle={faq.mainTitle} questions={faq.questions} />
      </div>
    </div>
  );
}
