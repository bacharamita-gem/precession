import React from "react";

export default function Marquee() {
  const items = [
    "Desiccated Coconut",
    "Cereal & Nuts",
    "Cranberry Pomace",
    "Animal Feed",
    "Starch",
    "Specialty Foods",
    "Synthetic Rubber",
    "Fertilizers",
    "Natural Fibers",
    "Tobacco",
    "Flour",
    "Soap",
  ];

  // Double the items for seamless looping
  const tickerItems = [...items, ...items];

  return (
    <div className="w-full overflow-hidden gray-900 py-2 border-y border-[#d25f4b]/20 "
    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div className="whitespace-nowrap flex w-max animate-ticker">
        {tickerItems.map((item, index) => (
          <span
            key={index}
            className="text-white font-sans font-semibold text-sm tracking-[0.1em] uppercase mx-6 flex items-center"
          >
            {item}{" "}
            <span className="text-[#d25f4b] ml-12 text-3xl leading-none">
              &middot;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
