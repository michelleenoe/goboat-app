"use client";
import { useState } from "react";
import Screen1 from "../components/onboarding/Screen1";
import Screen2 from "../components/onboarding/Screen2";
import Screen3 from "../components/onboarding/Screen3";

export default function Onboarding() {
  const [currentScreen, setCurrentScreen] = useState(1);

  const nextScreen = () => setCurrentScreen((prev) => Math.min(prev + 1, 3));
  const previousScreen = () => setCurrentScreen((prev) => Math.max(prev - 1, 1));

  return (
    <>
      {currentScreen === 1 && <Screen1 onNext={nextScreen} />}
      {currentScreen === 2 && (
        <Screen2 onBack={previousScreen} onNext={nextScreen} />
      )}
      {currentScreen === 3 && (
        <Screen3 onBack={previousScreen} onComplete={() => alert("Completed!")} />
      )}
    </>
  );
}
