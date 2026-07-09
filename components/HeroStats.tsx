"use client";

import React, { useEffect, useState, useRef } from "react";

// Hook for counting up smoothly
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrame: number;

    // Easing function for smoother deceleration
    const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const currentCount = Math.floor(easeOutQuart(progress) * end);
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return { count, ref };
}

interface StatItemProps {
  end: number;
  suffix?: string;
  label: string;
}

function StatItem({ end, suffix = "", label }: StatItemProps) {
  const { count, ref } = useCountUp(end, 2000);

  return (
    <div ref={ref} className="flex flex-col items-start"
    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div className="text-3xl md:text-4xl font-bold text-[#d25f4b] mb-1 font-serif"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
        {count}
        {suffix}
      </div>
      <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold"
      >
        {label}
      </div>
    </div>
  );
}

export default function HeroStats() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 bg-[#fffaf8] gap-8 md:gap-12 w-full p-6 border-t border-gray-200 font-sans">
        <StatItem end={112} suffix="+" label="Dryers Delivered" />
        <StatItem end={15} suffix="+" label="Countries Reached" />
        <StatItem end={88} suffix="%" label="Repeat Order Rate" />
        <StatItem end={268} suffix="K" label="Tons Dried Annually" />
        <div className="col-span-2 md:col-span-1">
          <StatItem end={93} suffix="%" label="Customer Satisfaction" />
        </div>
      </div>
    </>
  );
}
