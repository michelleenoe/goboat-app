import { getLanguage } from "../app/lib/storage";
import { copy } from "../content/copy";

export default function DashboardPage() {
  const lang = getLanguage();
  const text = copy[lang];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">{text.reminders.finalMessage}</h1>
    </div>
  );
}
