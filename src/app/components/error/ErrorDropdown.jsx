import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ErrorDropdown({ data, language, onSelect }) {
  const [selectedError, setSelectedError] = useState(() => {
    if (typeof window !== "undefined") {
      const savedErrorId = localStorage.getItem("selectedErrorId");
      return data.find((item) => item.id === Number(savedErrorId)) || data[0];
    }
    return data[0];
  });

  useEffect(() => {
    if (selectedError) {
      localStorage.setItem("selectedErrorId", selectedError.id);
    }
  }, [selectedError]);

  const handleSelect = (error) => {
    setSelectedError(error);
    onSelect(error);
  };

  return (
    <div className="px-4 flex flex-col relative">
      <Listbox value={selectedError} onChange={handleSelect}>
        {({ open }) => (
          <div className="relative">
            <ListboxButton
              className="w-full py-2 pl-6 pr-4 border text-sm border-darkBlue rounded-full bg-grey2 text-typoPrimary hover:bg-grey1 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-focusOrange focus-visible:outline-offset-2 flex justify-between items-center"
              aria-labelledby="error-dropdown-label"
            >
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
              <ListboxOptions className="absolute text-sm mt-2 w-full bg-grey2 text-typoPrimary border border-darkBlue rounded-3xl shadow-lg z-10 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-focusOrange focus-visible:outline-offset-2 max-h-52 overflow-y-auto scrollbar-hidden">
                {data.map((item) => (
                  <ListboxOption
                    tabIndex={0}
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
