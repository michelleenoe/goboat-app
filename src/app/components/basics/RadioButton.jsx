import React from "react";

export function RadioButton({ name, value, label, checked, onChange }) {
  return (
    <label className="cursor-pointer flex flex-col items-center">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="peer hidden"
      />
      <div className="w-11 h-11 rounded-full bg-settingsBg peer-checked:bg-goboatYellow border-2 solid border-typoSecondary transition"></div>
      <span className="text-sm mt-1 text-typoPrimary">{label}</span>
    </label>
  );
}
