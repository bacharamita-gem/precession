import React from "react";

export default function PromiseSection() {
  const promises = [
    {
      title: "Pilot Trial Before Commitment",
      desc: "Test your actual product in our dryer before the PO is raised. Real data. No surprises after commissioning.",
    },
    {
      title: "Low Cost of Operation",
      desc: "Designed for energy and steam efficiency. Spares cost consistently below 0.5% of machine value across our installed base.",
    },
    {
      title: "Consistent Dry Product Output",
      desc: "Same moisture specification — batch after batch, shift after shift, year after year. No variability, no rejections.",
    },
    {
      title: "Throughput We Stand Behind",
      desc: "Capacity commitments are made after pilot trials — not estimated from charts. We commission to specification, not to paperwork.",
    },
    {
      title: 'No "Buy and Fly"',
      desc: "Reliable AMC and service partnership. Our team built your machine. They're the team you call when you have questions.",
    },
    {
      title: "Training at Commissioning",
      desc: "Your operators run the machine with full confidence before we leave site. Essential spares and 1-year warranty included in every project.",
    },
  ];

  return (
    <section
      className="w-full pt-16 pb-14 bg-[#0B1F3A] font-sans border-t-4 border-[#d25f4b]"
      id="promise"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <p className="text-[11px] tracking-[3px] uppercase text-[#d25f4b] font-bold mb-4">
            Our Commitment
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            What we commit to —<br />
            <em className="text-[#fbc6ba] italic font-medium">
              every project.
            </em>
          </h2>
          <p className="text-lg text-gray-300/70 italic font-light max-w-xl">
            "If we take care of our customers, our customers will take care of
            us."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* First 5 Promise Cards */}
{promises.slice(0, 5).map((item, index) => (
  <div key={index} className="flex items-start group">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#d25f4b]/10 border border-[#d25f4b]/30 flex items-center justify-center mr-5 mt-1 group-hover:bg-[#d25f4b] group-hover:border-[#d25f4b] transition-colors duration-300">
      <svg
        className="w-4 h-4 text-[#d25f4b] group-hover:text-white transition-colors"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>

    <div>
      <h4 className="text-xl font-bold text-white mb-3">
        {item.title}
      </h4>

      <p className="text-sm text-gray-400 leading-relaxed">
        {item.desc}
      </p>
    </div>
  </div>
))}

{/* Training Card */}
<div className="flex items-start group">
  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#d25f4b]/10 border border-[#d25f4b]/30 flex items-center justify-center mr-5 mt-1">
    <svg
      className="w-4 h-4 text-[#d25f4b]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  </div>

  <div>
    <h4 className="text-xl font-bold text-white mb-3">
      {promises[5].title}
    </h4>

    <p className="text-sm text-gray-400 leading-relaxed">
      {promises[5].desc}
    </p>
  </div>
</div>

{/* YouTube Video */}
<div className="lg:col-span-2 flex justify-center items-start">
  <div className="w-full max-w-xl aspect-video overflow-hidden rounded-xl">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/S1HvaDO0I7Q"
    title="GEM Drytech Video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
</div>
</div>
        </div>
        
      </div>
    </section>
  );
}
