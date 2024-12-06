"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../../lib/context/language";
import { copy } from "../../lib/content/copy";

import { useRouter } from "next/navigation";

export default function ScreenThree({ onBack }) {
  const { language } = useLanguage();
  const router = useRouter();
  const [isAgreed, setIsAgreed] = useState(false);

  const handleAgreeChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex-grow flex flex-col items-center justify-center rounded-3xl bg-grey1 p-8 max-w-lg h-[350px]">
          <h2 className="text-xl font-bold mb-4">
            {copy[language].reminders.title}
          </h2>
          <ul className="space-y-4 text-left">
            <li className="flex items-center">
              <Image
                src="/illustrations/sejtilhøjre.svg"
                alt="Harbor"
                width={32}
                height={32}
                className="mr-4"
              />
              {copy[language].reminders.point1}
            </li>
            <li className="flex items-center">
              <Image
                src="/illustrations/sejlimidten.svg"
                alt="Canal"
                width={32}
                height={32}
                className="mr-4"
              />
              {copy[language].reminders.point2}
            </li>
            <li className="flex items-center">
              <Image
                src="/illustrations/Havnebus.svg"
                alt="Bus"
                width={32}
                height={32}
                className="mr-4"
              />
              {copy[language].reminders.point3}
            </li>
          </ul>
          <div className="flex items-center mt-6">
            <label htmlFor="agree" className="text-sm">
              {copy[language].reminders.agreeConditions}
            </label>
            <input
              type="checkbox"
              id="agree"
              className="ml-2 w-4 h-4"
              onChange={handleAgreeChange}
              checked={isAgreed}
            />
          </div>
          <p className="mt-8 font-bold text-center">
            {copy[language].reminders.finalMessage}
          </p>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <div className="flex gap-2">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-11 h-11 bg-goboatYellow text-darkBlue rounded-full transition"
          >
            <Image
              src="/Icons/chevron-left.svg"
              alt="Previous"
              width={30}
              height={30}
            />
          </button>
          <button
            onClick={() => isAgreed && router.push("/")}
            className={`flex items-center justify-center w-11 h-11 text-darkBlue rounded-full transition ${
              isAgreed
                ? "bg-goboatYellow"
                : "bg-gray-300 opacity-40 cursor-not-allowed"
            }`}
            disabled={!isAgreed}
          >
            <Image
              src="/Icons/chevron-right.svg"
              alt="Next"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </>
  );
}
