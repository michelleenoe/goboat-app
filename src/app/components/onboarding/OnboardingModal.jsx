"use client";
import { useState } from "react";
import Screen1 from "../onboarding/Screen1";
import Screen2 from "../onboarding/Screen2";
import Screen3 from "../onboarding/Screen3";

export default function OnboardingModal({ onComplete }) {
  const [currentScreen, setCurrentScreen] = useState(1);

  const nextScreen = () => setCurrentScreen((prev) => prev + 1);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {currentScreen === 1 && <Screen1 onNext={nextScreen} />}
        {currentScreen === 2 && <Screen2 onNext={nextScreen} />}
        {currentScreen === 3 && <Screen3 onComplete={onComplete} />}
      </div>
    </div>
  );
}
