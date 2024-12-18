"use client";

import Image from "next/image";

export default function SettingsButton({ onClick, icon, altText, isActive }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center w-12 h-12 rounded-full ${
        isActive ? "bg-lightBlue" : "bg-grey2 hover:bg-lightBlue"
      }`}
    >
      <Image
        src={icon}
        alt={altText}
        width={24}
        height={24}
        className="w-8 h-8"
      />
    </button>
  );
}
