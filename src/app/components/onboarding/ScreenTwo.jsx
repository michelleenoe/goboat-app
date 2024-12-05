"use client";
import { useLanguage } from "../../lib/context/language";
import { copy } from "../../lib/content/copy"; 
import { useRouter } from "next/navigation";


export default function ScreenTwo({ onBack, onNext }) {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">{copy[language].timer.title}</h2>
        <div className="flex flex-col space-y-4">
          <button className="bg-yellow-400 px-6 py-2 rounded-full">
            {copy[language].timer.oneHour}
          </button>
          <button className="bg-yellow-400 px-6 py-2 rounded-full">
            {copy[language].timer.twoHours}
          </button>
          <button className="bg-yellow-400 px-6 py-2 rounded-full">
            {copy[language].timer.threeHours}
          </button>
        </div>
        <div className="flex justify-between mt-8 w-full">
          <button onClick={onBack} className="w-10 h-10 bg-gray-500 rounded-full">
          </button>
          <button onClick={onNext} className="w-10 h-10 bg-yellow-400 rounded-full">
          </button>
        </div>
      </main>
    </div>
  );
}
