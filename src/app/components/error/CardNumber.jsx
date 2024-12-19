import Image from "next/image";

const CardNumber = ({ index }) => {
    const illustrationPath = `/Illustrations/nr${index + 1}.svg`;

  return (
    <div className="w-12 h-12">
      <Image
        src={illustrationPath}
        alt={`Card Number ${index + 1}`}
        width={48}
        height={48}
        className="object-contain"
      />
    </div>
  );
};

export default CardNumber;
