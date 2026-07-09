"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // Smooth scroll to target
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      // Update URL hash without jumping
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <nav className="flex items-center justify-between px-5 md:px-12 py-2 bg-white border-b border-gray-100 sticky top-0 z-100"
    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div className="flex items-center gap-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center justify-center h-16 w-auto relative z-[60] cursor-pointer"
        >
          <img
            src="/logo/gem_logo.png"
            alt="GEM Logo"
            className="object-contain h-full"
          />
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <a
          href="#Products"
          onClick={(e) => handleScroll(e, "Products")}
          className="text-gray-600 hover:text-red-600  font-bold transition-colors uppercase tracking-wider text-sm cursor-pointer"
         >
          Products
        </a>
        <a
          href="#Verticals"
          onClick={(e) => handleScroll(e, "Verticals")}
          className="text-gray-600 hover:text-red-600  font-bold transition-colors uppercase tracking-wider text-sm cursor-pointer"
         >
          Verticals
        </a>
        <a
          href="#cases"
          onClick={(e) => handleScroll(e, "cases")}
          className="text-gray-600 hover:text-red-600  font-bold transition-colors uppercase tracking-wider text-sm cursor-pointer"
        >
          Case Studies
        </a>
        <a
          href="#Process"
          onClick={(e) => handleScroll(e, "Process")}
          className="text-gray-600 hover:text-red-600  font-bold transition-colors uppercase tracking-wider text-sm cursor-pointer"
        >
          Process
        </a>
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "contact")}
          className="bg-red-600 text-white px-6 py-2 rounded-none font-bold hover:bg-red-700 transition-colors uppercase tracking-wider text-sm cursor-pointer"
        >
          Get a Quote
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col items-center justify-center gap-1.5 p-2 relative z-[60]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-900 transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-900 transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-900 transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl flex flex-col md:hidden overflow-hidden transition-all duration-300 ease-in-out z-100 ${isMenuOpen ? "max-h-[500px] py-4" : "max-h-0 py-0 border-transparent shadow-none"}`}
      >
        <div className="flex flex-col gap-4 px-6 pb-2">
          <a
            href="#machines"
            onClick={(e) => handleScroll(e, "machines")}
            className="text-gray-800 hover:text-red-600 italic font-bold transition-colors uppercase tracking-wider text-sm border-b border-gray-50 pb-3 cursor-pointer"
          >
            Machines
          </a>
          <a
            href="#process"
            onClick={(e) => handleScroll(e, "process")}
            className="text-gray-800 hover:text-red-600 italic font-bold transition-colors uppercase tracking-wider text-sm border-b border-gray-50 pb-3 cursor-pointer"
          >
            Process
          </a>
          <a
            href="#cases"
            onClick={(e) => handleScroll(e, "cases")}
            className="text-gray-800 hover:text-red-600 italic font-bold transition-colors uppercase tracking-wider text-sm border-b border-gray-50 pb-3 cursor-pointer"
          >
            Case Studies
          </a>
          <a
            href="#why"
            onClick={(e) => handleScroll(e, "why")}
            className="text-gray-800 hover:text-red-600 italic font-bold transition-colors uppercase tracking-wider text-sm border-b border-gray-50 pb-3 cursor-pointer"
          >
            Why GEM
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="bg-red-600 text-white px-6 py-4 mt-2 rounded-none font-bold text-center hover:bg-red-700 transition-colors uppercase tracking-wider text-sm shadow-md cursor-pointer"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
