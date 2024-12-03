"use client";

import { useState, useEffect } from "react";

export default function Component() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
        {!isMobile ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Please view on mobile</h1>
            <p className="text-lg mb-4">
              This app is optimized for mobile devices.
            </p>
          </div>
        ) : (
          <div className="w-full max-w-md">
            <h1 className="text-2xl font-light mb-4">Welcome to Our App</h1>
            <p className="text-lg mb-4">
              This is the mobile version of our app.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
