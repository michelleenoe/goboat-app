"use client";

import { useTheme } from "@/app/lib/context/ThemeContext";
import Image from "next/image";

const InfoItem = ({ iconLight, iconDark, title, description }) => {
  const { theme } = useTheme();

  return (
    <div className="flex items-start space-x-3">
      <div className="mt-1">
        <Image
          src={theme === "dark" ? iconDark : iconLight}
          alt={`${title} Icon`}
          width={20}
          height={20}
        />
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoItem;
