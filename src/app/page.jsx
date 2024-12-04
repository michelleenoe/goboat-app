import { getLanguage } from "../app/lib/storage";
import TipsSlider from "./components/tips/TipsSlider";
import { tipsData, pagetitles } from "../content/tipsData";

export default function DashboardPage() {
  const lang = getLanguage();

  const pageTitle = pagetitles[lang] || pagetitles.en; // Fald tilbage til engelsk
  const tips = tipsData[lang] || tipsData.en; // Fald tilbage til engelsk

  return (
    <div>
      <h2 className=" text-lg font-semibold">{pageTitle}</h2>
      <div>
        <TipsSlider tips={tips} />
      </div>
    </div>
  );
}
