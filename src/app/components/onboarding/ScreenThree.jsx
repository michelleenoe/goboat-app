"use client";
import React from 'react';
import { useLanguage } from "../../lib/context/language";
import { copy } from "../../lib/content/copy"; 
import { useRouter } from "next/navigation";

export default function ScreenThree({ onBack }) {
  const { language } = useLanguage();
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">{copy[language].reminders.title}</h2>
        <ul className="space-y-4 text-left">
          <li className="flex items-center">
            <img src="/illustrations/sejtilhøjre.svg" alt="Harbor" className="w-8 h-8 mr-4" />
            {copy[language].reminders.point1}
          </li>
          <li className="flex items-center">
            <img src="/illustrations/sejlimidten.svg" alt="Canal" className="w-8 h-8 mr-4" />
            {copy[language].reminders.point2}
          </li>
          <li className="flex items-center">
            <img src="/illustrations/Havnebus.svg" alt="Bus" className="w-8 h-8 mr-4" />
            {copy[language].reminders.point3}
          </li>
        </ul>
        <div className="flex items-center mt-6">
  <label htmlFor="agree" className="text-sm">
    {copy[language].reminders.agreeConditions}
  </label>
  <input type="checkbox" id="agree" className="ml-2 w-4 h-4" />
</div>
        <p className="mt-8 font-bold text-center">
          {copy[language].reminders.finalMessage}
        </p>
        <div className="flex justify-between mt-8 w-full">
          <button onClick={onBack} className="w-10 h-10 bg-gray-500 rounded-full">
          </button>
          <button
            onClick={() => router.push("/")}
            className="w-10 h-10 bg-yellow-400 rounded-full"
          >
          </button>
        </div>
      </main>
    </div>
  );
}
