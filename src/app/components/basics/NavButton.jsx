import Link from "next/link";
import Image from "next/image";

export default function NavButton({ href, icon, altText }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center w-12 h-12 bg-grey2 rounded-full hover:bg-lightBlue"
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
