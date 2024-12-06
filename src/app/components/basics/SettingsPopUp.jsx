// import React from "react";

// export default function SettingsPopup({ isOpen, onClose }) {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white rounded-lg shadow-lg w-80 p-6">
//         <h2 className="text-xl font-semibold mb-4">Settings</h2>
//         <p className="text-gray-700">This is the settings modal content.</p>
//         <button
//           onClick={onClose}
//           className="mt-4 px-4 py-2 bg-mediumBlue text-white rounded hover:bg-blue-500"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import Image from "next/image";
import { LanguageOptions } from "./LanguageOptions";
import { ThemeOptions } from "./ThemeOptions";

export default function SettingsPopup({ isOpen, onClose }) {
  const [locationEnabled, setLocationEnabled] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-typoPrimary bg-opacity-50 z-50">
      <div className="bg-grey1 rounded-3xl shadow-lg w-80 p-6 relative">
        <h2 className="text-xl font-semibold text-center mb-6">Settings</h2>

        {/* Location Switch */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-typoPrimary">Location</span>
          <Switch
            checked={locationEnabled}
            onChange={setLocationEnabled}
            className={`${
              locationEnabled ? "bg-goboatYellow" : "bg-settingsBg"
            } relative inline-flex h-11 w-20 items-center rounded-full transition border-2 solid border-typoSecondary`} // Adjust size here
          >
            <span
              className={`${
                locationEnabled ? "translate-x-9" : "translate-x-1"
              } inline-block h-9 w-9 transform rounded-full bg-typoSecondary transition`} // Ensure the circle is 44px
            />
          </Switch>
        </div>

        <LanguageOptions />
        <ThemeOptions />

        {/* Close Button */}
        <div className=" flex justify-end">
          <button
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition"
          >
            <span className="sr-only">Close</span>
            <Image src="/Icons/x.svg" alt="Previous" width={30} height={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
