"use client";

import React, { useState } from "react";
import tipsData from "./tipsData"; // Importer tips data
import TipsCard from "./TipsCard"; // Importer kortkomponenten
import NavigationButtons from "./NavigationButtons"; // Importer navigation

const TipsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tipsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === tipsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-gray-100 p-6">
      <h2 className=" text-xl font-bold mb-6">5 Quick Tips with GoBoat</h2>
      <div className="relative flex items-center justify-center">
        <TipsCard tip={tipsData[currentIndex]} /> {/* Dynamisk kort */}
        {/* Navigation */}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {tipsData.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-goboatYellow" : "bg-grey1"
            }`}
          />
        ))}
      </div>
      <NavigationButtons handlePrev={handlePrev} handleNext={handleNext} />{" "}
      {/* Pagination */}
    </div>
  );
};

export default TipsCarousel;
