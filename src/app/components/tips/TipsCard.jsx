import Image from "next/image";

const TipsCard = ({ tip }) => {
  return (
    <div className="p-4 border bg-grey1 rounded-3xl shadow-md">
      <div className="flex justify-start items-center space-x-4 mb-2">
        <Image
          src={tip.numbericon}
          alt={`${tip.title} Icon`}
          width={30}
          height={30}
        />
        <p className=" text-typoPrimary text-m font-semibold">{tip.title}</p>
      </div>
      <div className=" text-typoPrimary flex justify-center items-center gap-10">
        <p className="text-sm max-w-40 text-typoPrimary ">{tip.description}</p>
        <Image
          src={tip.icon}
          alt={`${tip.title} Icon`}
          width={132}
          height={132}
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default TipsCard;
