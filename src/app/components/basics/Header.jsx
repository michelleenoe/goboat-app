"use client";

import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

export default function Header() {
  const { theme } = useTheme();

  return (
    <header className="w-full flex justify-left">
      <div className="py-4 mx-4 mb-5">
        <Image
          src={
            theme === "dark"
              ? "/Icons/Logo_darktheme.svg"
              : "/Icons/Logo_lighttheme.svg"
          }
          alt="Logo"
          width={200}
          height={100}
        />
      </div>
    </header>
  );
}
