"use client"
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/Faro-BoldLucky.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/Faro-RegularLucky.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


import { useState, useEffect } from 'react'

export default function Component() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
     <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      {!isMobile ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please view on mobile</h1>
          <p className="text-lg mb-4">This app is created for mobile devices.</p>
        </div>
      ) : (
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Welcome to GoBoat</h1>
          <p className="text-lg mb-4">This is the mobile version of GoBoat app.</p>
        </div>
      )}
    </div>
    </div>
  )
}

