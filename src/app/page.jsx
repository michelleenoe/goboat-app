import { getLanguage } from "../app/lib/storage";
import TipsSlider from "./components/tips/TipsSlider";
import tipsData from "../content/tipsData";
import FAQ from "./components/faq/FAQ";
import faqData from "../content/faqData";

export default function DashboardPage() {
  const lang = getLanguage();

  const tips = tipsData[lang] || tipsData.en; // Fald tilbage til engelsk
  const faq = faqData[lang] || faqData.en; // Fald tilbage til engelsk

  return (
    <div>
      <div>
        <TipsSlider mainTitle={tips.mainTitle} tips={tips.tips} />
      </div>

      <div>
        <FAQ mainTitle={faq.mainTitle} questions={faq.questions} />
      </div>
    </div>
  );
}
