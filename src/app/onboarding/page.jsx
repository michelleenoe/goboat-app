"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const OnboardingPage = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const router = useRouter();

  const nextScreen = () => {
    if (currentScreen < 3) {
      setCurrentScreen(currentScreen + 1);
    } else {
      localStorage.setItem("onboardingComplete", "true");
      router.push("/");
    }
  };

  return (
    <div>
      {currentScreen === 1 && (
        <div>
          <h1>Welcome to Screen 1</h1>
          <button onClick={nextScreen}>Next</button>
        </div>
      )}
      {currentScreen === 2 && (
        <div>
          <h1>Welcome to Screen 2</h1>
          <button onClick={nextScreen}>Next</button>
        </div>
      )}
      {currentScreen === 3 && (
        <div>
          <h1>Welcome to Screen 3</h1>
          <button onClick={nextScreen}>Finish</button>
        </div>
      )}
    </div>
  );
};

export default OnboardingPage;
