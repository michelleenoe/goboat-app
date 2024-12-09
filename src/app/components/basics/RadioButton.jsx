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
        className="peer hidden" // Skjul standard radio-knappen
      />
      {/* Container for den visuelle radioknap */}
      <div className="w-11 h-11 rounded-full bg-settingsBg peer-checked:bg-goboatYellow border border-typoSecondary transition flex items-center justify-center">
        {/* Prikken i midten vises kun, når valgt */}
        {checked && (
          <div className="w-5 h-5 rounded-full bg-typoSecondary"></div>
        )}
      </div>
      {/* Label tekst */}
      <span className="text-sm mt-1 text-typoPrimary">{label}</span>
    </label>
  );
}
