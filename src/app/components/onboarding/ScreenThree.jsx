"use client";
import { useState, useEffect } from "react";
import { copy } from "../../lib/content/copy";
import { getReminders } from "@/app/lib/content/reminders";
import ReminderList from "./ReminderList";
import OnboardingButtons from "./OnboardingButtons";
import AgreeCheckbox from "./AgreeCheckbox";
import Pagination from "./Pagination";
import { useFooterVisibility } from "@/app/lib/context/FooterVisibility";

export default function ScreenThree({ onBack, language }) {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleAgreeChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  const reminders = getReminders(copy, language);

  const { setIsFooterVisible } = useFooterVisibility();

  useEffect(() => {
    setIsFooterVisible(false);
    return () => setIsFooterVisible(true);
  }, [setIsFooterVisible]);

  return (
    <>
      <div className="bg-[url('/illustrations/Forside.svg')] bg-cover bg-center min-h-screen -mx-4">
        <div className="flex justify-center items-center text-typoPrimary">
          <div className="flex-grow flex flex-col items-center  rounded-3xl bg-grey1 p-8 max-w-lg h-[350px] mx-4">
            <h2 id="reminders-title" className="text-xl font-bold mb-6">
              {copy[language].reminders.title}
            </h2>

            <ReminderList aria-labelledby="reminders-title" items={reminders} />

            <div className="mt-5">
              <AgreeCheckbox
                label={copy[language].reminders.confirmationMessage}
                isChecked={isAgreed}
                onChange={handleAgreeChange}
              />
            </div>
          </div>
        </div>
        <Pagination
          aria-label={`Step 3 of 3`}
          currentScreen={2}
          totalScreens={3}
        />
        <div className="mr-4">
          <OnboardingButtons
            onBack={onBack}
            isAgreed={isAgreed}
            nextRoute="/"
          />
        </div>
      </div>
    </>
  );
}
