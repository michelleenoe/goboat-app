import Image from "next/image";

const PlayButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-11 h-11 bg-grey1 hover:bg-lightBlue rounded-full transition"
    >
      <div className="ml-1">
        <Image src="/Icons/play.svg" alt="Previous" width={24} height={24} />
      </div>
    </button>
  );
};

export default PlayButton;
