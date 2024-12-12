"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingPage() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 100); // Opdater punktummerne hvert 500 ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="text-center">
        {/* Logo */}
        <div className="w-32 h-32 mx-auto relative">
          <Image
            src="/Icons/Logo_lighttheme.svg"
            alt="GoBoat Logo"
            fill
            className="object-contain dark:hidden"
          />
          <Image
            src="/Icons/Logo_darktheme.svg"
            alt="GoBoat Logo"
            fill
            className="object-contain hidden dark:block"
          />
        </div>

        {/* Loading Animation */}
        <p className="text-3xl text-typoPrimary dark:text-grey1 mt-4">{dots}</p>
      </div>
    </div>
  );
}
