"use client";
import { getLanguage } from "../app/lib/storage";
import TipsSlider from "./components/tips/TipsSlider";
import tipsData from "../content/tipsData";
import FAQ from "./components/faq/FAQ";
import Weather from "./components/weather/Weather";
import faqData from "../content/faqData";

export default function DashboardPage() {
  const lang = getLanguage();

  const tips = tipsData[lang] || tipsData.en; // Fald tilbage til engelsk
  const faq = faqData[lang] || faqData.en; // Fald tilbage til engelsk
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  return (
    <div>
      <div>
        <Weather city="Copenhagen" apiKey={apiKey} />
      </div>
      <div>
        <TipsSlider mainTitle={tips.mainTitle} tips={tips.tips} />
      </div>

      <div>
        <FAQ mainTitle={faq.mainTitle} questions={faq.questions} />
      </div>
    </div>
  );
}
