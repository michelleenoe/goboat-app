"use client";

import Image from "next/image";
import { useTheme } from "@/app/lib/context/ThemeContext";

export default function Header() {
  const { theme } = useTheme();

  return (
    <header className=" w-52 flex justify-left">
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
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </header>
  );
}
