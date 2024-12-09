import React from "react";

const AgreeCheckbox = ({ label, isChecked, onChange }) => {
  return (
    <div className="flex items-center justify-center mt-6">
      <label htmlFor="agree" className="text-sm cursor-pointer">
        {label}
      </label>
      <div className="flex items-center justify-center relative ml-2">
        <input
          type="checkbox"
          id="agree"
          className="appearance-none w-5 h-5 border-2 bg-settingsBg border-typoSecondary rounded-md checked:bg-goboatYellow  transition cursor-pointer"
          onChange={onChange}
          checked={isChecked}
        />
        <svg
          className={`absolute top-0.5 w-5 h-5 pointer-events-none text-typoSecondary transition ${
            isChecked ? "opacity-100" : "opacity-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 11l-2-2-1.414 1.414L9 13.828l8.414-8.414L16 4l-7 7z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default AgreeCheckbox;
