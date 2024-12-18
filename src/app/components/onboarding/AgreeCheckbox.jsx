import Image from "next/image";

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
          className="appearance-none w-5 h-5 border-2 bg-grey2 border-typoSecondary rounded-md checked:bg-goboatYellow hover:bg-yellow-500 transition cursor-pointer"
          onChange={onChange}
          checked={isChecked}
        />
        <Image
          src="/Icons/check.svg"
          alt="Check icon"
          width={18}
          height={18}
          className={`absolute top-0.5 pointer-events-none text-typoSecondary transition ${
            isChecked ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

export default AgreeCheckbox;
