"use client";
import { getLanguage } from "./lib/data/storage";
import TipsSlider from "./components/tips/TipsSlider";
import tipsData from "./lib/content/tipsData";
import FAQ from "./components/faq/FAQ";

import faqData from "./lib/content/faqData";
import titleData from "./lib/content/titleData";
import weatherData from "./lib/content/weatherData";
import WeatherContainer from "./components/weather/WeatherContainer";

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
        <WeatherContainer city="Copenhagen" weather={weather} />
        {/* apiKey={apiKey} skal inkluderes i Weathercontainer, når appen går live */}
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
