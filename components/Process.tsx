import React from "react";

export default function Process() {
  const steps = [
    {
      num: "Discovery",
      title: "Understand Your Product",
      body: "30-minute call. We map your material, current production volume, target moisture, heat source availability, and any food-grade or certification requirements — before touching a spec sheet.",
    },
    {
      num: "Pilot Trial",
      title: "Send Us a Sample",
      body: "We run drying trials at our Kolkata pilot plant with your actual product. You receive real moisture curves and throughput data — not promises — before committing to equipment. Returned within 5 working days.",
    },
    {
      num: "Sizing & Quote",
      title: "Right Machine. Real Numbers.",
      body: "We size the dryer to your throughput, select belt / band / rotary / flash, specify the heat train, and deliver a detailed quotation with full technical specs, drawings, and a total cost of ownership cost.",
    },
    {
      num: "Build & Commission",
      title: "Manufacture, Install, Train.",
      body: "12–16 weeks manufacture at our 60,000 sq.ft. Kolkata facility. On-site installation, commissioning, and operator training. 1-year warranty. AMC available. We stay until you're running at spec.",
    },
  ];

  return (
    <section
      className="w-full py-24 bg-[#0B1F3A] text-white font-sans border-t-4 border-[#d25f4b]"
      id="Process"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <p className="text-[11px] tracking-[3px] uppercase text-[#d25f4b] font-bold mb-4">
            How We Work
          </p>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <h2
              className="text-4xl md:text-5xl font-bold leading-[1.1] max-w-2xl"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              Four steps from{" "}
              <em className="text-[#fbc6ba] italic font-medium">inquiry</em> to a
              running machine.
            </h2>
            <p className="text-lg text-gray-300 max-w-lg font-light leading-relaxed border-l-2 border-[#d25f4b]/50 pl-6">
              Most clients move from first conversation to a commissioned dryer
              in 4–6 months. No surprise charges, no scope creep.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 relative mt-8">
          {/* Connecting line for large screens */}
          <div className="hidden xl:block absolute top-8 left-6 right-6 h-[1px] bg-[#d25f4b]/20 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col group">
              <div className="w-16 h-16 bg-[#0B1F3A] border-2 border-[#d25f4b]/30 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#d25f4b] group-hover:border-[#d25f4b] transition-colors duration-300 shadow-[0_0_15px_rgba(210,95,75,0.15)] group-hover:shadow-[0_0_20px_rgba(210,95,75,0.4)]">
                <span className="text-xl font-bold font-serif text-[#fbc6ba] group-hover:text-white transition-colors">
                  0{index + 1}
                </span>
              </div>

              <div className="bg-[#0f2545] border border-white/5 p-8 flex-grow hover:bg-[#153158] hover:border-[#d25f4b]/30 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <div className="text-xs font-bold text-[#d25f4b] uppercase tracking-wider mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
