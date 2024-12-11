import Image from "next/image";

const NavigationButtons = ({ handlePrev, handleNext }) => {
  return (
    <>
      <div className="flex justify-end gap-2 ">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center w-11 h-11 bg-goboatYellow hover:bg-yellow-500 rounded-full transition"
        >
          <Image
            src="/Icons/chevron-left.svg"
            alt="Previous"
            width={30}
            height={30}
          />
        </button>
        <button
          onClick={handleNext}
          className="flex items-center justify-center w-11 h-11 bg-goboatYellow hover:bg-yellow-500 rounded-full transition"
        >
          <Image
            src="/Icons/chevron-right.svg"
            alt="Next"
            width={30}
            height={30}
          />
        </button>
      </div>
    </>
  );
};

export default NavigationButtons;
