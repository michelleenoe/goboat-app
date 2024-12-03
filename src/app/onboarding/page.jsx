"use client";
import { useState } from "react";
import Screen1 from "../components/Onboarding/Screen1";
import Screen2 from "../components/Onboarding/Screen2";
import Screen3 from "../components/Onboarding/Screen3";
import { useRouter } from "next/navigation";

const OnboardingPage = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const router = useRouter();

  const nextScreen = () => {
    if (currentScreen < 3) {
      setCurrentScreen(currentScreen + 1);
    } else {
      router.push("/dashboard");
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return <Screen1 onNext={nextScreen} />;
      case 2:
        return <Screen2 onNext={nextScreen} />;
      case 3:
        return <Screen3 onNext={nextScreen} />;
      default:
        return null;
    }
  };

  return <div>{renderScreen()}</div>;
};

export default OnboardingPage;
