import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex justify-left">
      <div className="py-4 mx-8 mb-5">
        <Image
          src="http://localhost:3000/icons/gb-logo.svg"
          alt="Logo"
          width={200}
          height={100}
          style={{ height: "auto", width: "auto" }}
        />
      </div>
    </header>
  );
}
