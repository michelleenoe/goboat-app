import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex justify-left">
      <div className="py-4 mx-8 ">
        <Image
          src="/icons/gb-logo.svg"
          alt="Logo"
          width={148} // Adjust the width as needed
          height={34} // Adjust the height as needed
          className="h-10"
        />
      </div>
    </header>
  );
}
