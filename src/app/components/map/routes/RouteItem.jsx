import React from "react";
import Image from "next/image";

export default function RouteItem({
  route,
  isSelected,
  onSelect,
  getRouteName,
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(route.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onSelect(route.id);
        }
      }}
      className={`p-2 cursor-pointer rounded-lg flex justify-between items-center hover:bg-grey1 focus:outline-none focus-visible:ring-2 focus-visible:ring-focusOrange ${
        isSelected ? "bg-grey1 font-regular" : ""
      }`}
    >
      <div className="flex items-center space-x-2">
        <span>{getRouteName(route.id)}</span>
      </div>
      <span
        className={`rounded-full w-6 h-6 flex items-center justify-center border-2 border-typoSecondary ${
          isSelected ? "bg-goboatYellow" : "bg-settingsBg"
        }`}
      >
        {isSelected && (
          <Image
            src="/Icons/check.svg"
            alt="Check icon"
            width={16}
            height={16}
          />
        )}
      </span>
    </div>
  );
}
