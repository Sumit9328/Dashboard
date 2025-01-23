"use client";
import React, { useState } from "react";

const SliderComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const classes = [
    "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", 
    "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev < classes.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="relative p-2">
      {/* Back Button */}
      <button
        onClick={handlePrev}
        className="absolute left-0 bg-white p-2 rounded-full shadow-md"
        style={{
          top: "12px",
          left: "-4px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <svg
          width="6"
          height="6"
          viewBox="0 0 6 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.77902 0.920932C5.90106 0.798889 5.90106 0.601018 5.77901 0.478982L5.52096 0.220952C5.39892 0.0989219 5.20106 0.0989262 5.07902 0.220961L0.220962 5.07902C0.0989258 5.20106 0.0989256 5.39892 0.220961 5.52096L5.07901 10.379C5.20105 10.501 5.39891 10.501 5.52095 10.379L5.77903 10.1209C5.90107 9.9989 5.90107 9.80103 5.77903 9.67899L1.62099 5.52096C1.49896 5.39892 1.49895 5.20106 1.62099 5.07902L5.77902 0.920932Z"
            fill="#333D61"
          />
        </svg>
      </button>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 gap-4"
          style={{
            transform: `translateX(-${activeIndex * 120}px)`, // Adjusted for larger gap
          }}
        >
          {classes.map((item, index) => (
            <div
              key={index}
              className={`px-6 py-2 rounded-md text-center ${
                index === activeIndex
                  ? "bg-[#FFB390] text-black text-[14px]"
                  : "text-[14px] bg-gray-100 text-gray-600"
              }`}
              style={{ minWidth: "110px" }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-0 bg-white p-2 rounded-full shadow-md"
        style={{
          top: "14px",
          right: "20px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <svg
          width="6"
          height="6"
          viewBox="0 0 6 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.220978 0.920932C0.0989365 0.798889 0.0989413 0.601018 0.220989 0.478982L0.479041 0.220952C0.601082 0.0989219 0.798938 0.0989262 0.920973 0.220961L5.77903 5.07902C5.90107 5.20106 5.90107 5.39892 5.77903 5.52096L0.920983 10.379C0.798944 10.501 0.60108 10.501 0.479041 10.379L0.220971 10.1209C0.0989319 9.9989 0.098932 9.80103 0.220971 9.67899L4.37901 5.52096C4.50104 5.39892 4.50105 5.20106 4.37901 5.07902L0.220978 0.920932Z"
            fill="#333D61"
          />
        </svg>
      </button>
    </div>
  );
};

export default SliderComponent;
