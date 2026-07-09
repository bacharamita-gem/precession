import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      stars: "★★★★★",
      text: '"GEM continues to partner with us as a trusted OEM supplier for our DC dryers. We both value quality and service level in our business dealings."',
      author: "Cesar Q. Galvez",
      role: "VP Operations · Franklin Baker Company, Philippines",
    },
    {
      stars: "★★★★★",
      text: '"GEM has performed all dryer installation work in accordance with the contract. I highly commend the professionalism and expertise of the entire team."',
      author: "Todd & Tim Heeg",
      role: "Co-Presidents · NLFP LLC, USA",
    },
    {
      stars: "★★★★★",
      text: '"GEM has provided us with excellent dryers and equipment. Their quality of products and their commitment to service have met our expectations."',
      author: "Tran Van Duc",
      role: "Chairman · BEINCO, Vietnam",
    },
  ];

  return (
    <section
      className="w-full py-24 bg-[#fffaf8] font-sans border-t border-[#d25f4b]/10"
      id="testimonials"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <p className="text-[11px] tracking-[3px] uppercase text-[#d25f4b] font-bold mb-4">
            What Clients Say
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-[1.1]"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            Build for 24/7 operation
            <br />
            <em className="text-[#C0392B] italic font-medium">
              Rate by those who use it.
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#d25f4b]/5 p-8 md:p-10 flex flex-col h-full shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative Quotation Mark */}
              <div className="absolute -top-4 -right-2 text-[150px] font-serif text-gray-50 opacity-50 pointer-events-none leading-none select-none">
                "
              </div>

              <div className="text-[#d25f4b] tracking-widest text-xl mb-6 relative z-10">
                {item.stars}
              </div>

              <p className="text-lg text-gray-700 italic leading-relaxed mb-8 flex-grow relative z-10">
                {item.text}
              </p>

              <div className="pt-6 border-t border-gray-100 relative z-10">
                <div className="font-bold text-[#0B1F3A] mb-1">
                  {item.author}
                </div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                  {item.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
