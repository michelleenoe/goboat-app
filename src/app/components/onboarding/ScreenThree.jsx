import React, { useState } from "react";
import { useLanguage } from "../../lib/context/language";
import { copy } from "../../lib/content/copy";
import { getReminders } from "../../lib/data/reminders";
import ReminderList from "./ReminderList";
import OnboardingButtons from "./OnboardingButtons";
import AgreeCheckbox from "./AgreeCheckbox";

export default function ScreenThree({ onBack }) {
  const { language } = useLanguage();
  const [isAgreed, setIsAgreed] = useState(false);

  const handleAgreeChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  const reminders = getReminders(copy, language);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex-grow flex flex-col items-center justify-center rounded-3xl bg-grey1 p-8 max-w-lg h-[350px]">
          <h2 className="text-xl font-bold mb-4">
            {copy[language].reminders.title}
          </h2>
          <ReminderList items={reminders} />
          <AgreeCheckbox
            label={copy[language].reminders.agreeConditions}
            isChecked={isAgreed}
            onChange={handleAgreeChange}
          />
          <p className="mt-8 font-bold text-center">
            {copy[language].reminders.finalMessage}
          </p>
        </div>
      </div>
      <OnboardingButtons onBack={onBack} isAgreed={isAgreed} nextRoute="/" />
    </>
  );
}
