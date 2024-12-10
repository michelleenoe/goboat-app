"use client";

import Image from "next/image";
import { useTheme } from "@/app/lib/context/ThemeContext";
import { usePathname } from "next/navigation";
import Timer from "@/app/components/onboarding/Timer";

export default function Header() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const isOnboarding = pathname.startsWith("/onboarding");

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
          priority
        />
      </div>
      {!isOnboarding && (
        <div className="">
          <Timer />
        </div>
      )}
    </header>
  );
}

