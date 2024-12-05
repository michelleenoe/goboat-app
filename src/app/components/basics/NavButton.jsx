import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavButton({ href, icon, altText }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Link
      href={href}
      onClick={() => setIsActive(true)} // Aktiverer knappen
      className={`flex items-center justify-center w-12 h-12 rounded-full ${
        isActive ? "bg-lightBlue" : "bg-grey2 hover:bg-lightBlue"
      }`}
    >
      <Image
        src={icon}
        alt={altText}
        width={24} // Angiv billedets bredde
        height={24} // Angiv billedets højde
        className="w-8 h-8"
      />
    </Link>
  );
}
