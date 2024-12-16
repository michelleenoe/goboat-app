"use client";

import Image from "next/image";
import { useTheme } from "@/app/lib/context/ThemeContext";
import { usePathname } from "next/navigation";
import Timer from "@/app/components/onboarding/Timer";
import { useState } from "react";
import { useLanguage } from "@/app/lib/context/LanguageContext";
import TimeUpPopUp from "./TimeUpPopUp";

export default function Header() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const pathname = usePathname();
  const isOnboarding = pathname.startsWith("/onboarding");

  const [timeLeft, setTimeLeft] = useState(null);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const resetTimer = (duration) => {
    const totalTime = parseInt(duration, 10) * 60 * 60;
    const endTime = new Date(new Date().getTime() + totalTime * 1000);

    localStorage.setItem("selectedDuration", duration);
    localStorage.setItem("timerEndTime", endTime.toISOString());
    setIsTimeUp(false);
  };

  const backgroundColor =
    timeLeft === null
      ? "bg-grey1"
      : timeLeft === 0
      ? "bg-warningRed"
      : timeLeft <= 900
      ? "bg-goboatYellow"
      : "bg-grey1";

  return (
    <header className="relative flex items-center w-full p-4 mb-6">
      <div className="max-w-48">
        <Image
          src={
            theme === "dark"
              ? "/Icons/Logo_darktheme.svg"
              : "/Icons/Logo_lighttheme.svg"
          }
          alt="Logo"
          width={200}
          height={100}
          style={{ width: "auto", height: "auto" }}
          priority
        />
      </div>

      {!isOnboarding && (
        <div
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 py-3 px-4 rounded-full ${backgroundColor}`}
        >
          <Timer
            onTimeUpdate={setTimeLeft}
            onTimeUp={() => setIsTimeUp(true)}
          />
        </div>
      )}

      {isTimeUp && (
        <TimeUpPopUp
          language={language}
          resetTimer={resetTimer}
          closePopUp={() => setIsTimeUp(false)}
        />
      )}
    </header>
  );
}
