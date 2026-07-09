import React from 'react';

export default function Pitfalls() {
  const pitfalls = [
    {
      num: "01",
      title: "No product pre-trial",
      body: "Buying without trying your specific material in the specific dryer. Every product dries differently. Assumptions cost thousands."
    },

    {
      num: "02",
      title: "Chasing the cheapest option",
      body: "Poor quality and poor service hidden inside the lowest bid. In industrial drying, cheap always pays twice."
    },
    {
      num: "03",
      title: "Hidden AMC & service costs",
      body: "Expensive commissioning, spares, and annual maintenance fees not quoted upfront. Calculate the full ownership cost, not just the sticker price."
    },
    {
      num: "04",
      title: "Unexpected cost of ownership",
      body: "Power, steam, and spare-part costs quietly higher than quoted."
    },
    {
      num: "05",
      title: "Delayed or missing ROI",
      body: "Over-priced equipment that never pays back — or pays back too late. Your payback window should be discussed before the PO is raised."
    },
    {
      num: "06",
      title: "\"Sell and forget\" suppliers",
      body: "Supplier disappears after installation — no AMC, no spares, no backup. You inherit a machine with no one behind it."
    },
   
    {
      num: "07",
      title: "Over-paying for brand name",
      body: "Expensive machines with fewer features than the alternatives. The name on the plate doesn't dry your product — the engineering does."
    },
    
    {
      num: "08",
      title: "Wrong sizing & layout",
      body: "Equipment that doesn't match your site, your capacity, or your production flow. A dryer sized for someone else's plant is a liability in yours."
    }
  ];

  return (
    <section className="w-full py-24 bg-[#0B1F3A] text-white font-sans border-t-4 border-[#d25f4b]"
    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div>
            <p className="text-[11px] tracking-[3px] uppercase text-[#d25f4b] font-bold mb-4">
              Before You Buy
            </p>
            <h2 
              className="text-4xl md:text-5xl font-bold leading-[1.1]"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              8 costly mistakes<br />
              <em className="text-[#d25f4b] italic font-medium">dryer buyers make.</em>
            </h2>
          </div>
          <p className="text-lg text-gray-300 max-w-md leading-relaxed border-l-2 border-[#d25f4b]/50 pl-6 lg:mb-2">
            Most buyers discover these too late — after the machine is installed and the losses compound.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {pitfalls.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0f2545] border border-white/5 p-8 hover:bg-[#153158] hover:border-[#d25f4b]/30 transition-all duration-300 flex flex-col"
            >
              <div 
                className="text-4xl font-bold text-[#d25f4b] mb-6 opacity-50 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300"
                style={{ fontFamily: "var(--font-playfair-display)" }}
              >
                {item.num}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-100 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors mt-auto">
                {item.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
