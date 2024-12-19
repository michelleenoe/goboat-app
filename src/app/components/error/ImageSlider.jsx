// CHAT GPT PROMPT: "Hjælp mig med at implementere slideren fra tips her i imageslider, denne gang hvor data er fetchet fra supabase"

"use client";

import { useRef, useState, useEffect } from "react";
import NavigationButtons from "../basics/NavigationButtons";
import ImageCard from "./ImageCard";

const ImageSlider = ({ mainTitle, selectedError, language }) => {
  const sliderRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const getSolutionsAndImages = () => {
    const solutions = Array.from({ length: 5 }, (_, i) => {
      const solutionKey = `solution${i + 1}_${
        language === "da" ? "da" : "eng"
      }`;
      return selectedError?.[solutionKey] || null;
    });

    const images = selectedError?.img_url
      ? JSON.parse(selectedError.img_url)
      : [];

    return solutions.map((solution, index) => ({
      solution,
      image: images[index] || null,
      numbericon: `/illustrations/nr${index + 1}.svg`,
    }));
  };

  const items = getSolutionsAndImages().filter(
    (item) => item.solution || item.image
  );
  const duplicatedItems = [...items, ...items, ...items];
  const centerIndex = Math.floor(items.length);

  const scrollToIndex = (index, instant = false) => {
    if (!sliderRef.current || !sliderRef.current.children[0]) return;

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

    if (newIndex >= duplicatedItems.length - Math.floor(items.length)) {
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

    if (newIndex < Math.floor(items.length)) {
      setIsAnimating(true);
      scrollToIndex(newIndex);
      setTimeout(() => {
        scrollToIndex(
          duplicatedItems.length - Math.floor(items.length) - 1,
          true
        );
        setIsAnimating(false);
      }, 300);
    } else {
      scrollToIndex(newIndex);
    }
  };

  useEffect(() => {
    if (selectedError) {
      scrollToIndex(centerIndex, true);
    } else {
      scrollToIndex(centerIndex, true);
    }
  }, [selectedError, centerIndex]);

  return (
    <div className="image-slider-container px-4 max-w-4xl mx-auto">
      <div
        id="image-slider"
        ref={sliderRef}
        className="relative flex gap-4 overflow-x-auto no-scrollbar px-4 pb-6 -mx-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-focusOrange"
        style={{
          scrollSnapType: "x mandatory",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ scrollSnapAlign: "center" }}
          >
            <ImageCard
              key={index}
              {...item}
              index={index}
              numbericon={item.numbericon}
            />
          </div>
        ))}
      </div>
      <NavigationButtons
        aria-controls="image-slider"
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
};

export default ImageSlider;
