import Image from "next/image";

const CloseButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="absolute top-2 right-2">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-grey2 hover:bg-lightBlue">
        <Image
          src="/Icons/x.svg"
          alt="close"
          width={24}
          height={24}
          className="w-8 h-8"
        />
      </div>
    </button>
  );
};

export default CloseButton;
