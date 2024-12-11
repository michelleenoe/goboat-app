"use client";

import Image from "next/image";
import { useTheme } from "@/app/lib/context/ThemeContext";
import { usePathname } from "next/navigation";
import Timer from "@/app/components/onboarding/Timer";
import { useState } from "react";
import { timerData } from "@/content/timerData";
import { useLanguage } from "@/app/lib/context/language";

export default function Header() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const pathname = usePathname();
  const isOnboarding = pathname.startsWith("/onboarding");

  const [timeLeft, setTimeLeft] = useState(null);
  const [isTimeUp, setIsTimeUp] = useState(false);

  // Dynamisk baggrundsfarve baseret på tid
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
      {/* Logo */}
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

      {/* Timer */}
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

      {/* Pop-up */}
      {isTimeUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-grey2 p-6 rounded-3xl shadow-lg text-center">
            <p className="text-lg font-bold mb-4">
              {timerData[language].timeup}
            </p>
            <p className="mb-4">{timerData[language].sailback}</p>
            <div className="flex justify-center items-center">
              <button
                onClick={() => setIsTimeUp(false)} // Lukker pop-up
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
      )}
    </header>
  );
}
