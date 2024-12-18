"use client";

import Image from "next/image";
import DefaultButton from "../onboarding/DefaultButton";
import { copy } from "@/app/lib/content/copy";
import { timerData } from "@/app/lib/content/timerData";

export default function TimeUpPopUp({ language, resetTimer, closePopUp }) {
  return (
    <div className="fixed inset-0 text-typoPrimary bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-grey1 p-6 rounded-3xl shadow-lg text-center">
        <p className="text-lg font-bold mb-4">{timerData[language].timeup}</p>
        <p className="mb-4">{timerData[language].sailback}</p>
        <div className="flex flex-col items-center">
          <DefaultButton
            onClick={() => resetTimer(1)}
            text={copy[language].timer.resetOneHour}
          />
          <DefaultButton
            onClick={() => resetTimer(2)}
            text={copy[language].timer.resetTwoHours}
          />
          <DefaultButton
            onClick={() => resetTimer(3)}
            text={copy[language].timer.resetThreeHours}
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={closePopUp}
            className="flex justify-center items-center w-12 h-12 rounded-full bg-grey2 hover:bg-lightBlue"
          >
            <Image
              src="/Icons/x.svg"
              alt="close"
              width={24}
              height={24}
              className="w-8 h-8"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
