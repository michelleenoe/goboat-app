import React from "react";
import Image from "next/image";

export default function RouteItem({ route, isSelected, onSelect, getRouteName }) {
  return (
    <div
      onClick={() => onSelect(route.id)}
      className={`p-2 rounded-lg flex justify-between items-center ${
        isSelected ? "bg-grey2 font-regular" : ""
      }`}
    >
      <div className="flex items-center space-x-2">
        <span>{getRouteName(route.id)}</span>
      </div>
      <span
        className={`rounded-full w-6 h-6 flex items-center justify-center ${
          isSelected ? "bg-goboatYellow" : "bg-grey1"
        }`}
      >
        {isSelected && (
          <Image
            src="/icons/check.svg"
            alt="Check icon"
            width={16}
            height={16}
          />
        )}
      </span>
    </div>
  );
}
