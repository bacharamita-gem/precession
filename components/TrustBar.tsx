"use client";

import React, { useEffect, useRef, useState } from "react";

const Marquee = ({
  items,
  speed = 0.05,
  reverse = false,
}: {
  items: any[];
  speed?: number;
  reverse?: boolean;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    // Initialize reverse position to avoid jumping from 0
    if (reverse && scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
    }

    let scrollPos = scrollContainer.scrollLeft;
    const actualSpeed = reverse ? -Math.abs(speed) : Math.abs(speed);

    const scroll = (time: number) => {
      if (!isPaused && !isDragging) {
        // Detect manual scrolling via trackpad/mousewheel
        if (Math.abs(scrollContainer.scrollLeft - Math.round(scrollPos)) > 2) {
          scrollPos = scrollContainer.scrollLeft;
        }

        const delta = time - lastTime;
        // Cap delta to avoid jumps if browser tab was inactive
        if (delta > 0 && delta < 100) {
          scrollPos += actualSpeed * delta;
        }

        // Reset scroll position when halfway to create an infinite loop
        if (scrollPos >= scrollContainer.scrollWidth / 2) {
          scrollPos -= scrollContainer.scrollWidth / 2;
        } else if (scrollPos <= 0 && actualSpeed < 0) {
          scrollPos += scrollContainer.scrollWidth / 2;
        }

        scrollContainer.scrollLeft = scrollPos;
      } else {
        // Keep position in sync if user manually scrolled
        scrollPos = scrollContainer.scrollLeft;
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isDragging, speed, reverse]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeftStart.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full relative group">
      {/* Fading Edges */}
      <div className="absolute inset-y-0 left-0 w-8 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-8 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div
        ref={scrollRef}
        className={`flex overflow-x-auto w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          handleMouseUpOrLeave();
        }}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
      >
        {/* We render 4 sets to ensure the scrollable area is always much larger than the viewport */}
        {[...Array(4)].map((_, setIndex) => (
          <div
            key={`set-${setIndex}`}
            className="flex flex-shrink-0 pr-4 md:pr-6 gap-4 md:gap-6 items-center"
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="h-16 md:h-20 w-[120px] md:w-[160px] flex-shrink-0 flex items-center justify-center bg-gray-50 border border-gray-100 rounded-none hover:border-red-200 hover:bg-red-50 hover:shadow-md transition-all duration-300 overflow-hidden p-2"
              >
                <img
                  src={item.logoUrl}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain filter md:grayscale md:opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function TrustBar() {
  const clients = [
    { name: "Client 1", logoUrl: "/Brand Logo/A.png" },
    { name: "Client 2", logoUrl: "/Brand Logo/basic.png" },
    { name: "Client 3", logoUrl: "/Brand Logo/apc.png" },
    { name: "Client 4", logoUrl: "/Brand Logo/AVM.png" },
    { name: "Client 5", logoUrl: "/Brand Logo/Century.png" },
    { name: "Client 6", logoUrl: "/Brand Logo/GAYatri.png" },
    { name: "Client 7", logoUrl: "/Brand Logo/ISR.png" },
    { name: "Client 8", logoUrl: "/Brand Logo/jaquargrouplogo.png" },
    { name: "Client 9", logoUrl: "/Brand Logo/nitta2.png" },
    { name: "Client 10", logoUrl: "/Brand Logo/peter.png" },
    { name: "Client 11", logoUrl: "/Brand Logo/RAJ.png" },
    { name: "Client 12", logoUrl: "/Brand Logo/sam.png" },
    { name: "Client 12", logoUrl: "/Brand Logo/CB.png" },
 
  ];

  return (
    <section
  className="py-8 bg-white"
  aria-label="Our clients"
  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
>
      <div className="max-w-9xl mx-auto px-2 md:px-12">
  <h2 className="text-center text-xl md:text-xl font-bold text-gray-900 mb-6">
    TRUSTED BY LEADING PRODUCERS GLOBALLY
  </h2>

  <div className="mb-6">
    <Marquee items={clients} speed={0.05} reverse />
  </div>
</div>
    </section>
  );
}
