import React from "react";

export default function Specs() {
  return (
    <section
      className="w-full py-24 bg-[#fffaf8] font-sans border-t border-[#d25f4b]/10"
      id="specs"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <p className="text-[11px] tracking-[3px] uppercase text-[#d25f4b] font-bold mb-4">
            Technical Specifications
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-[1.1]"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            Built for 24/7 operation.
            <br />
            <em className="text-[#C0392B] italic font-medium">
              Rated by those who use it.
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 lg:gap-24">
          {/* Right Column - Ratings */}
          <div>
            <div className="bg-white border border-gray-100 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-sm">
              <p className="text-[11px] tracking-[3px] uppercase text-[#d25f4b] font-bold mb-8">
                The Gem Difference
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <div className="text-sm font-bold text-[#0B1F3A] mb-2 uppercase tracking-wide">
                    Reliable & Durable
                  </div>
                  <div className="text-sm text-gray-500 leading-relaxed">
                    Years of continuous operation, minimal intervention.
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B1F3A] mb-2 uppercase tracking-wide">
                    Low TCO
                  </div>
                  <div className="text-sm text-gray-500 leading-relaxed">
                    Low power, low steam, low spares — the real ROI story.
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B1F3A] mb-2 uppercase tracking-wide">
                    Consistent Quality
                  </div>
                  <div className="text-sm text-gray-500 leading-relaxed">
                    Same dry product spec — batch after batch.
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B1F3A] mb-2 uppercase tracking-wide">
                    Accredited Standards
                  </div>
                  <div className="text-sm text-gray-500 leading-relaxed">
                    HACCP, FDA, ISO 22000, BRCGS, USDA built-in.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
