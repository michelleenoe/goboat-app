"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavButton({ href, icon, altText }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center justify-center w-12 h-12 rounded-full ${
        isActive ? "bg-lightBlue" : "bg-grey2 hover:bg-lightBlue"
      }`}
    >
      <Image
        src={icon}
        alt={altText}
        width={24}
        height={24}
        className="w-8 h-8"
      />
    </Link>
  );
}
