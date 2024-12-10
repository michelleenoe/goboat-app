import Image from "next/image";

const ImageCard = ({ solution, image, numbericon }) => {
  return (
    <div className="p-4 border bg-grey1 rounded-3xl shadow-md w-366px">
      <div className="flex justify-start items-center space-x-4 mb-4">
        {numbericon && (
          <Image
            src={numbericon}
            alt="Number Icon"
            width={30}
            height={30}
            className="object-contain"
          />
        )}

        {solution && (
          <p className="text-typoPrimary text-sm font-semibold">{solution}</p>
        )}
      </div>

      {image && (
        <div className="relative w-80 h-52">
          <Image
            src={image}
            alt="Card Image"
            layout="fill"
            objectFit="cover"
            className="rounded-md shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default ImageCard;
