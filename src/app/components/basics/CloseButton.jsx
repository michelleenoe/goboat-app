import Image from "next/image";

export function CloseButton({ onClose }) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClose}
        className="w-11 h-11 flex items-center justify-center rounded-full bg-grey2 hover:bg-lightBlue transition"
        aria-label="Close"
      >
        <Image src="/Icons/x.svg" alt="" width={30} height={30} />
      </button>
    </div>
  );
}
