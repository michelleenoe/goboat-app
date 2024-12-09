import { useState, useEffect } from "react";
import { useLanguage } from "../../lib/context/language";
import { copy } from "../../lib/content/copy";
import { getReminders } from "../../lib/data/reminders";
import ReminderList from "./ReminderList";
import OnboardingButtons from "./OnboardingButtons";
import AgreeCheckbox from "./AgreeCheckbox";
import Pagination from "./Pagination";
import { useFooterVisibility } from "@/app/lib/context/FooterVisibility";

export default function ScreenThree({ onBack }) {
  const { language } = useLanguage();
  const [isAgreed, setIsAgreed] = useState(false);

  const handleAgreeChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  const reminders = getReminders(copy, language);

  const { setIsFooterVisible } = useFooterVisibility();

  useEffect(() => {
    setIsFooterVisible(false); // Skjul Footer
    return () => setIsFooterVisible(true); // Vis Footer igen ved afmontering
  }, [setIsFooterVisible]);

  return (
    <>
      <div className="flex justify-center items-center text-typoPrimary">
        <div className="flex-grow flex flex-col items-center justify-center rounded-3xl bg-grey1 p-8 max-w-lg h-[350px]">
          <h2 className="text-xl font-bold mb-4">
            {copy[language].reminders.title}
          </h2>
          <ReminderList items={reminders} />
          <AgreeCheckbox
            label={copy[language].reminders.confirmationMessage}
            isChecked={isAgreed}
            onChange={handleAgreeChange}
          />
          {/* <p className="mt-8 font-bold text-center text-typoPrimary">
            {copy[language].reminders.finalMessage}
          </p> */}
        </div>
      </div>
      <Pagination currentScreen={2} totalScreens={3} />
      <OnboardingButtons onBack={onBack} isAgreed={isAgreed} nextRoute="/" />
    </>
  );
}
