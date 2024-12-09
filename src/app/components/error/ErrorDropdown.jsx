import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";

export default function ErrorDropdown({ data, language, onSelect }) {
  const [selectedError, setSelectedError] = useState(data[0]); // Standardvalgt fejl

  const handleSelect = (error) => {
    setSelectedError(error);
    onSelect(error);
  };

  return (
    <div className="flex flex-col relative">
      <label htmlFor="error-select" className="text-xl font-bold mb-4">
        Find Your Error Code
      </label>
      <Listbox value={selectedError} onChange={handleSelect}>
        {({ open }) => (
          <div className="relative">
            <ListboxButton className="w-full p-3 border border-darkBlue rounded-full bg-grey2 text-typoPrimary hover:bg-grey1 focus:outline-none focus-visible:ring-2 focus-visible:ring-focusOrange flex justify-between items-center">
              <span>
                {selectedError.e_codes} -{" "}
                {language === "da"
                  ? selectedError.da_title
                  : selectedError.eng_title}
              </span>
              <div
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              >
                <Image
                  src="/Icons/chevron-down.svg"
                  alt="Dropdown Arrow"
                  width={30}
                  height={30}
                />
              </div>
            </ListboxButton>
            {open && (
              <ListboxOptions className="absolute text-sm mt-2 w-full bg-grey2  border border-darkBlue rounded-3xl shadow-lg z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-focusOrange max-h-52 overflow-y-auto scrollbar-hidden">
                {data.map((item) => (
                  <ListboxOption
                    tabindex={0}
                    key={item.id}
                    value={item}
                    className={({ active }) =>
                      `p-4 cursor-pointer ${
                        active
                          ? "bg-grey1  rounded-3xl text-primary border-typoPrimary"
                          : "bg-grey2 rounded-3xl text-typoPrimary"
                      }`
                    }
                  >
                    {item.e_codes} -{" "}
                    {language === "da" ? item.da_title : item.eng_title}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            )}
          </div>
        )}
      </Listbox>
    </div>
  );
}
