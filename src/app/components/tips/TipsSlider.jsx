// CHAT GPT PROMPT: Jeg arbejder på en slider-komponent i React, hvor jeg ønsker følgende funktioner. Slideren skal starte centreret på det første kort, når den indlæses. Slideren skal kunne scrolle infinit uden at hoppe, så brugeren aldrig når en egentlig start eller slut.

"use client";

import { useRef, useState, useEffect } from "react";
import TipsCard from "./TipsCard";
import NavigationButtons from "../basics/NavigationButtons";

const TipsSlider = ({ mainTitle, tips = [] }) => {
  const sliderRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const duplicatedTips = [...tips, ...tips, ...tips];
  const centerIndex = Math.floor(tips.length);

  const scrollToIndex = (index, instant = false) => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.children[0].offsetWidth;
    const scrollPosition =
      index * cardWidth - sliderRef.current.offsetWidth / 2 + cardWidth / 2;

    sliderRef.current.style.scrollBehavior = instant ? "auto" : "smooth";
    sliderRef.current.scrollTo({
      left: scrollPosition,
    });
  };

  const handleNext = () => {
    if (!sliderRef.current || isAnimating) return;

    const cardWidth = sliderRef.current.children[0].offsetWidth;
    const scrollLeft = sliderRef.current.scrollLeft;
    const currentIndex = Math.round(scrollLeft / cardWidth);
    const newIndex = currentIndex + 1;

    if (newIndex >= duplicatedTips.length - Math.floor(tips.length)) {
      setIsAnimating(true);
      scrollToIndex(newIndex);
      setTimeout(() => {
        scrollToIndex(centerIndex, true);
        setIsAnimating(false);
      }, 300);
    } else {
      scrollToIndex(newIndex);
    }
  };

  const handlePrev = () => {
    if (!sliderRef.current || isAnimating) return;

    const cardWidth = sliderRef.current.children[0].offsetWidth;
    const scrollLeft = sliderRef.current.scrollLeft;
    const currentIndex = Math.round(scrollLeft / cardWidth);
    const newIndex = currentIndex - 1;

    if (newIndex < Math.floor(tips.length)) {
      setIsAnimating(true);
      scrollToIndex(newIndex);
      setTimeout(() => {
        scrollToIndex(
          duplicatedTips.length - Math.floor(tips.length) - 1,
          true
        );
        setIsAnimating(false);
      }, 300);
    } else {
      scrollToIndex(newIndex);
    }
  };

  useEffect(() => {
    scrollToIndex(centerIndex, true);
  }, [centerIndex]);

  return (
    <div className="tips-slider-container px-4 max-w-4xl mx-auto ">
      <h2 className="text-xl font-bold mb-4">{mainTitle}</h2>
      <div
        id="tips-slider"
        ref={sliderRef}
        className="relative flex gap-4 overflow-x-auto no-scrollbar px-4 pb-6 -mx-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-focusOrange
"
        style={{
          scrollSnapType: "x mandatory",
        }}
      >
        {duplicatedTips.map((tip, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ scrollSnapAlign: "center" }}
          >
            <TipsCard tip={tip} />
          </div>
        ))}
      </div>
      <NavigationButtons
        aria-controls="tips-slider"
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
};

export default TipsSlider;
