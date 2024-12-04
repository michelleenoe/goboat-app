"use client";

import React, { useRef, useState, useEffect } from "react";
import TipsCard from "./TipsCard";
import NavigationButtons from "../basics/NavigationButtons";

const TipsSlider = ({ tips = [] }) => {
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
      // Sømløst skift fra sidste kort til første
      setIsAnimating(true);
      scrollToIndex(newIndex);
      setTimeout(() => {
        scrollToIndex(centerIndex, true); // Instant scroll til første kopi
        setIsAnimating(false);
      }, 300); // Transitionens varighed
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
      // Sømløst skift fra første kort til sidste
      setIsAnimating(true);
      scrollToIndex(newIndex);
      setTimeout(() => {
        scrollToIndex(
          duplicatedTips.length - Math.floor(tips.length) - 1,
          true
        ); // Instant scroll til sidste kopi
        setIsAnimating(false);
      }, 300); // Transitionens varighed
    } else {
      scrollToIndex(newIndex);
    }
  };

  useEffect(() => {
    scrollToIndex(centerIndex, true);
  }, []);

  return (
    <div className="relative ">
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto no-scrollbar p-4 -mx-4 sm:-mx-6"
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
      <NavigationButtons handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  );
};

export default TipsSlider;
