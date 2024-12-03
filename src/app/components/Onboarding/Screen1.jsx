"use client";
import { setLanguage } from "../../lib/storage";

export default function Screen1({ onNext }) {
  const handleLanguageSelection = (lang) => {
    setLanguage(lang); // Gem valgte sprog i localStorage
    onNext(); // Naviger til næste skærm
  };

  return (
    <div className="text-center">
      <h1 className="text-xl font-bold mb-4">Welcome to GoBoat!</h1>
      <p className="mb-6">Select your language to get started.</p>
      <button
        onClick={() => handleLanguageSelection("da")}
        className="bg-yellow-400 px-6 py-2 rounded-full mb-4"
      >
        Dansk
      </button>
      <button
        onClick={() => handleLanguageSelection("en")}
        className="bg-yellow-400 px-6 py-2 rounded-full"
      >
        English
      </button>
    </div>
  );
}
