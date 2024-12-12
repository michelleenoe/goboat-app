"use client";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

export default function LoadingPage() {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="text-center">
        {/* Logo med zoom-animation */}
        <div className="w-32 h-32 mx-auto relative animate-zoom">
          <Image
            src={
              theme === "dark"
                ? "/Icons/Logo_darktheme.svg"
                : "/Icons/Logo_lighttheme.svg"
            }
            alt="GoBoat Logo"
            fill
            className="object-contain dark:hidden"
          />
        </div>
      </div>
    </div>
  );
}
