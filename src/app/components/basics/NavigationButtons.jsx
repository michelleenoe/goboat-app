import React from "react";
import Image from "next/image";

const NavigationButtons = ({ handlePrev, handleNext }) => {
  return (
    <>
      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center w-11 h-11 bg-goboatYellow text-darkBlue rounded-full transition"
        >
          <Image
            src="/Icons/chevron-left.svg"
            alt="Previous"
            width={40}
            height={40}
            priority // For hurtigere indlæsning
          />
        </button>
        <button
          onClick={handleNext}
          className="flex items-center justify-center w-11 h-11 bg-goboatYellow text-darkBlue rounded-full transition"
        >
          <Image
            src="/Icons/chevron-right.svg"
            alt="Next"
            width={40}
            height={40}
            priority // For hurtigere indlæsning
          />
        </button>
      </div>
    </>
  );
};

export default NavigationButtons;
