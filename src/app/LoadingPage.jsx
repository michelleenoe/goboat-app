"use client";
import Image from "next/image";

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="text-center">
        <div className="w-32 h-32  bg-goboatBlue rounded-full  mx-auto relative animate-zoom">
          <Image
            src="/Icons/Logo_darktheme.svg"
            alt="GoBoat Logo"
            fill
            className="object-contain dark:hidden"
          />
        </div>
      </div>
    </div>
  );
}
