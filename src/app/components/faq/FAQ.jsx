"use client";

import { useState } from "react";
import Image from "next/image";

const FAQ = ({ mainTitle, questions }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" px-4">
      <h3 className="text-xl font-bold mb-4 ">{mainTitle}</h3>
      <div className="space-y-4">
        {questions.map((faq, index) => (
          <div
            key={index}
            className={`rounded-3xl shadow-md border ${
              activeIndex === index ? "bg-grey2" : "bg-grey1"
            }`}
          >
            <div
              className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-grey2  focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-focusOrange focus-visible:outline-offset-2 rounded-3xl"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleAccordion(index);
              }}
            >
              <p className="text-md font-semibold text-typoPrimary">
                {faq.title}
              </p>
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-transparent">
                <Image
                  src={
                    activeIndex === index
                      ? "/Icons/minus.svg"
                      : "/Icons/plus.svg"
                  }
                  alt={activeIndex === index ? "Collapse" : "Expand"}
                  width={30}
                  height={30}
                />
              </div>
            </div>
            {activeIndex === index && (
              <div className="px-4 pt-2 pb-4 text-typoSecondary">
                {faq.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
