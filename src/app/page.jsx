import { getLanguage } from "../app/lib/storage";
import { copy } from "../content/copy";
import TipsCarousel from "../app/components/tips/TipsCarousel";

export default function DashboardPage() {
  const lang = getLanguage();
  const text = copy[lang];

  return (
    <div>
      <div>
        <TipsCarousel />
      </div>
      <h1 className="text-3xl font-bold">{text.reminders.finalMessage}</h1>
    </div>
  );
}
