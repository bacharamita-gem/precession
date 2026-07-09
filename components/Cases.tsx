import React from 'react';

export default function Cases() {
  const cases = [
    {
      client: "Franklin Baker Company",
      country: "Philippines",
      sector: "Coconut Processing",
      highlight: "The gold standard in desiccated coconut — repeat client.",
      desc: "GEM supplied the first large 3,250mm wide band dryer for Franklin Baker's Philippines facility. Long-standing OEM relationship for DC dryer equipment across multiple production expansions.",
      metrics: [
        { num: "3,250mm", label: "Belt Width" },
        { num: "2015", label: "Since" }
      ],
      quote: "\"GEM continues to partner with us as a trusted OEM supplier for our DC dryers. We both value quality and service level in our business dealings.\"",
      attr: "— Cesar Q. Galvez, VP Operations · Franklin Baker Company, Philippines"
    },
    {
      client: "NLFP LLC",
      country: "USA",
      sector: "Cranberry Drying",
      highlight: "Three dryers replaced by one. Five times the capacity.",
      desc: "Before GEM: infrared belt dryer + rotary dryer + vibratory fluid bed — three separate systems. After: one GEM belt dryer delivering 5× previous throughput, reduced power and steam, and freed floor space for packing and storage.",
      metrics: [
        { num: "5×", label: "Capacity Increase" },
        { num: "3→1", label: "Dryers Consolidated" }
      ],
      quote: "\"Both objectives — commissioning and operator training — were achieved to our satisfaction. We look forward to a long-lasting and mutually rewarding relationship with GEM.\"",
      attr: "— Todd & Tim Heeg, Co-Presidents · NLFP LLC, USA"
    },
    {
      client: "Mayora Group",
      country: "Indonesia",
      sector: "Nuts Processing",
      highlight: "4+ years. Spares cost below 0.5% of machine value.",
      desc: "End-to-end processing line — from nuts receiving to packing — engineered, supplied, and commissioned by GEM. Trouble-free continuous operation maintained across the entire asset lifecycle.",
      metrics: [
        { num: "4+", label: "Years Running" },
        { num: "<0.5%", label: "Spares Cost" }
      ],
      quote: "Low total cost of ownership maintained across the asset lifecycle. Client continues to operate without planned major maintenance interventions.",
      attr: "— GEM Engineering Team · Post-Commission Review, 2024"
    },
    {
      client: "BEINCO",
      country: "Vietnam",
      sector: "Food Processing",
      highlight: "Excellent dryers. One of our leading suppliers of equipment.",
      desc: "Multi-unit supply relationship covering dryers and processing equipment. GEM's commitment to service and product quality has made them BEINCO's leading equipment partner over multiple years of engagement.",
      metrics: [
        { num: "Multi", label: "Unit Supply" },
        { num: "Vietnam", label: "Active Install" }
      ],
      quote: "\"Their quality of products and their commitment to BEINCO in terms of their service have met our expectations. They are one of our leading suppliers of equipment.\"",
      attr: "— Tran Van Duc, Chairman · BEINCO, Vietnam"
    }
  ];

  return (
    <section className="w-full py-24 bg-white font-sans border-t border-gray-100" id="cases"
    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        
        <div className="mb-16 max-w-3xl">
          <p className="text-[11px] tracking-[3px] uppercase text-[#d25f4b] font-bold mb-4">
            Proven Results
          </p>
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-[1.1]"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            Real plants. Real numbers.<br />
            <em className="text-[#C0392B] italic font-medium">Not projections.</em>
          </h2>
        </div>

        <div className="relative w-full overflow-hidden group/marquee mt-8">
          {/* Fading Edges for Smooth Scroll Appearance */}
          <div className="absolute top-0 bottom-0 left-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

          <div className="flex w-max animate-[scroll_50s_linear_infinite] group-hover/marquee:[animation-play-state:paused]">
            
            {[0, 1].map((set) => (
              <div key={set} className="flex gap-8 px-4 w-max">
                {cases.map((item, index) => (
                  <div key={`set${set}-${index}`} className="w-[350px] md:w-[450px] relative z-10 flex flex-col group shrink-0">
                    <div className="bg-[#fffaf8] border border-[#d25f4b]/5 p-8 flex flex-col h-full shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
                      
                      {/* Top */}
                      <div className="flex justify-between items-start mb-6 pb-6 border-b border-gray-200">
                        <div>
                          <div className="text-xl font-bold text-[#0B1F3A] mb-1">{item.client}</div>
                          <div className="text-sm font-medium text-gray-500">{item.country}</div>
                        </div>
                        <div className="text-[10px] uppercase tracking-wider font-bold bg-[#0B1F3A]/5 text-[#0B1F3A] px-3 py-1.5 rounded-sm">
                          {item.sector}
                        </div>
                      </div>

                      {/* Body */}
                      <div className="flex-grow">
                        <div className="text-xl font-bold text-[#d25f4b] leading-tight mb-4" style={{ fontFamily: "var(--font-playfair-display)" }}>
                          {item.highlight}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-8">
                          {item.desc}
                        </p>
                        
                        <div className="flex gap-8 mb-8">
                          {item.metrics.map((metric, mIdx) => (
                            <div key={mIdx}>
                              <div className="text-2xl font-bold text-[#0B1F3A] mb-1 leading-none">{metric.num}</div>
                              <div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="bg-white p-5 border-l-[3px] border-[#d25f4b] mt-auto">
                        <p className="text-sm italic text-gray-700 leading-relaxed mb-3">
                          {item.quote}
                        </p>
                        <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                          {item.attr}
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            ))}

          </div>
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}} />
        </div>

      </div>
    </section>
  );
}
