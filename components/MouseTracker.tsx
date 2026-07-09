"use client";

import { useEffect, useState, useRef } from "react";

export default function MouseTracker() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Use refs for positions to avoid re-renders
  const mousePos = useRef({ x: 0, y: 0 });
  const circlePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let rafId: number;
    let hasMoved = false;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      if (!hasMoved) {
        hasMoved = true;
        // Instantly move circle to mouse on first move
        circlePos.current = { x: e.clientX, y: e.clientY };
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (circleRef.current) circleRef.current.style.opacity = '1';
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target || !target.tagName) return;
      
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' || 
        target.closest('a') !== null || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('button') !== null ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'select';
        
      setIsHovering(isInteractive);
    };

    const animate = () => {
      // Lerp circle position towards mouse position
      circlePos.current.x += (mousePos.current.x - circlePos.current.x) * 0.15;
      circlePos.current.y += (mousePos.current.y - circlePos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }
      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circlePos.current.x}px, ${circlePos.current.y}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    
    // Start animation loop
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      {/* Dot (Instant tracking) */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 opacity-0 transition-opacity duration-300 z-[9999] hidden md:block"
      >
        <div className="w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full bg-red-600" />
      </div>
      
      {/* Circle (Delayed tracking) */}
      <div
        ref={circleRef}
        className="pointer-events-none fixed top-0 left-0 opacity-0 transition-opacity duration-300 z-[9998] hidden md:block"
      >
        <div 
          className={`w-10 h-10 -ml-5 -mt-5 rounded-full border-2 border-red-600 transition-all duration-300 ease-out ${isHovering ? 'scale-150 bg-red-600/10' : 'scale-100'}`} 
        />
      </div>
    </>
  );
}
