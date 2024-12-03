"use client";
import { useEffect, useState } from "react";
import { getLanguage, getOnboardingStatus, setOnboardingStatus } from "../app/lib/storage";
import { copy } from "../content/copy";
import OnboardingModal from "../app/components/Onboarding/OnboardingModal";

export default function DashboardPage() {
  const [lang, setLang] = useState("en");
  const [text, setText] = useState(copy["en"]);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const language = getLanguage();
    const onboardingCompleted = getOnboardingStatus();
    console.log("Language:", language);
    console.log("Onboarding completed:", onboardingCompleted);

    setLang(language);
    setText(copy[language]);

    if (!onboardingCompleted) {
      setShowOnboarding(true); // Vis onboarding, hvis det ikke er færdigt
    }
  }, []);

  const completeOnboarding = () => {
    setOnboardingStatus(); // Marker onboarding som færdigt
    setShowOnboarding(false); // Luk onboarding-modal
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {showOnboarding && <OnboardingModal onComplete={completeOnboarding} />}
      {!showOnboarding && (
        <h1 className="text-3xl font-bold">{text.reminders.finalMessage}</h1>
      )}
    </div>
  );
}
