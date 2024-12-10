import React from "react";
import Image from "next/image";

const CardNumber = ({ index }) => {
  // Generer stien til SVG baseret på index
  const illustrationPath = `/Illustrations/nr${index + 1}.svg`;

  return (
    <div className="w-12 h-12">
      <Image
        src={illustrationPath}
        alt={`Card Number ${index + 1}`}
        width={48} // Angiv bredde
        height={48} // Angiv højde
        className="object-contain"
      />
    </div>
  );
};

export default CardNumber;
