"use client";
import { useEffect } from "react";
import { copy } from "../../lib/content/copy";
import DefaultButton from "./DefaultButton";
import OnboardingButtons from "./OnboardingButtons";
import Pagination from "./Pagination";
import { useFooterVisibility } from "@/app/lib/context/FooterVisibility";

export default function ScreenOne({ onNext, setSelectedLanguage }) {
  const { setIsFooterVisible } = useFooterVisibility();

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    onNext();
  };

  useEffect(() => {
    setIsFooterVisible(false);
    return () => setIsFooterVisible(true);
  }, [setIsFooterVisible]);

  return (
    <>
      <div className="bg-[url('/illustrations/Forside.svg')] bg-cover bg-center min-h-screen -mx-4">
        <h1 className="sr-only">Goboat Onboarding Screen number 1</h1>
        <div className="flex justify-center items-center text-typoPrimary">
          <div className="flex-grow flex flex-col items-center  rounded-3xl bg-grey1 p-8 max-w-lg h-[350px] mx-4">
            <p className="text-xl font-bold mb-4">{copy["en"].welcome}</p>
            <h2 id="choose-language" className="text-center mb-8">
              {copy["en"].chooseLanguage}
            </h2>
            <DefaultButton
              onClick={() => handleLanguageSelect("da")}
              text={copy["en"].language.danish}
              aria-labelledby="choose-language"
            />
            <DefaultButton
              onClick={() => handleLanguageSelect("en")}
              text={copy["en"].language.english}
              aria-labelledby="choose-language"
            />
          </div>
        </div>
        <Pagination
          aria-label={`Step 1 of 3`}
          currentScreen={0}
          totalScreens={3}
        />
        <div className="mr-4">
          <OnboardingButtons onNext={onNext} disableBack />
        </div>
      </div>
    </>
  );
}
