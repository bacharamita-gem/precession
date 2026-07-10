import React from "react";

export default function Products() {
  const products = [
    {
      id: "belt-dryer",
      name: "Belt Dryer",
      tag: "⭐ Most Popular",
      featured: true,
      capacity: "10 – 100 TPD · Continuous Operation",
      desc: "The workhorse of industrial product drying. Conveyor belt carries product through multiple temperature zones — consistent moisture profile, batch after batch. Preferred for food, coconut, cereals, and high-volume processing.",
      apps: [
        "Desiccated Coconut",
        "Cereal & Nuts",
        "Cranberry Pomace",
        "Animal Feed",
        "Starch",
      ],
      payback:
        "Typical payback: 2–4 years · Heat source: Steam / Gas / Thermic / Flue",
    },
    {
      id: "band-dryer",
      name: "Band Dryer",
      tag: "Compact Footprint",
      featured: false,
      capacity: "5 – 30 TPD · Flexible Feedstock",
      desc: "Ideal where floor space is constrained or feedstock varies. Multi-pass band design maximizes drying surface within a compact envelope. Handles sticky, granular, and fibrous materials. Lower capex than belt dryers at similar throughput.",
      apps: ["Specialty Foods", "Natural Fibers", "Soap", "Tobacco", "Rubber"],
      payback:
        "Typical payback: 2–3 years · HACCP & FDA compliant construction available",
    },
    {
      id: "rotary-dryer",
      name: "Rotary Dryer",
      tag: "High Volume",
      featured: false,
      capacity: "50+ TPD · Abrasive & Sticky Materials",
      desc: "Built for high throughput and robust handling. Rotating drum tumbles material through hot airflow — effective on materials that would blind or bridge on a belt. Handles abrasive, coarse, and sticky feeds that belt systems cannot.",
      apps: ["Fertilizers", "Minerals", "Coarse Biomass", "Industrial Feed"],
      payback: "Typical payback: 3–5 years · High residual moisture tolerance",
    },
    {
      id: "flash-dryer",
      name: "Flash Dryer",
      tag: "Flash Drying",
      featured: false,
      capacity: "Instant Moisture Removal · Powder & Particulate",
      desc: "Rapid pneumatic drying for fine powders and particulate materials. Hot airstream carries wet product to cyclone separation — achieving target moisture in seconds. For flour, starch, pigments, and fine chemical applications.",
      apps: ["Flour & Starch", "Fine Powders", "Wood Chips"],
      payback: "Energy efficient · Compact installation footprint",
    },
    {
  id: "paddle-dryer",
  name: "Paddle Dryer",
  tag: "Indirect Drying",
  featured: false,
  capacity: "50Kg – 2,000 kgs/hr · Low Energy Consumption",
  desc: "Indirectly heated paddle dryer designed for sludge, filter cake, biomass, chemicals, and industrial by-products. Gentle mixing and efficient heat transfer ensure uniform drying with minimal dust generation and excellent thermal efficiency.",
  apps: [
    "Municipal Sludge",
    "Industrial Sludge",
    "Filter Cake",
    "Biomass",
    "Chemicals",
  ],
  payback:
    "Low operating cost · Closed-loop drying · Steam / Thermic Fluid Heating",
},
{
  id: "vfbd",
  name: "Vibratory Fluid Bed Dryer (VFBD)",
  tag: "Gentle Fluidization",
  featured: false,
  capacity: "1 – 150 TPD · Continuous",
  desc: "Designed for free-flowing granular and crystalline materials. Controlled vibration combined with fluidized air ensures gentle product handling, uniform moisture removal, and high thermal efficiency.",
  apps: [
    "Food Products",
    "Salt",
    "Chemicals",
    "Seeds",
    "Granules",
  ],
  payback:
    "Excellent product quality · Low product breakage · Energy Efficient",
},
{
  id: "tube-bundle-dryer",
  name: "Tube Bundle Dryer",
  tag: "Steam Heated",
  featured: false,
  capacity: "5 – 100 TPD · Continuous",
  desc: "Steam-heated rotary tube bundle dryer for bulk solids requiring indirect drying. Ideal where product quality, dust control, and energy efficiency are critical. Suitable for large-scale continuous production.",
  apps: [
    "Starch",
    "Fiber",
    "DDGS",
    "Biomass",
    "Organic Products",
  ],
  payback:
    "High thermal efficiency · Low dust emission · Long service life",
},
{
  id: "drum-dryer",
  name: "Drum Dryer",
  tag: "Liquid & Slurry",
  featured: false,
  capacity: "100 – 5,000 kg/hr Evaporation",
  desc: "Double and single drum dryers for converting liquid feeds, slurries, and pastes into flakes or powder. Widely used where rapid drying and compact installation are required.",
  apps: [
    "Starch",
    "Food Paste",
    "Potato",
    "Chemicals",
    "Fruit Puree",
  ],
  payback:
    "Compact footprint · Fast drying · Suitable for viscous products",
},
  ];

  return (
    <section className="w-full py-24 bg-[#fffaf8] font-sans" id="Products"
    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <p className="text-[11px] tracking-[3px] uppercase text-[#d25f4b] font-bold mb-4">
              Our Equipment
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-[1.1]"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              The Right Machine - Right Size
              <br />
              <em className="text-[#C0392B] italic font-medium">
                Right Output.
              </em>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-sm md:text-right leading-relaxed">
            Every dryer is sized to your throughput, your heat source, and your
            dry product specification — before manufacturing begins.
          </p>
        </div>

        <div
  className="relative w-full overflow-x-auto overflow-y-hidden group/marquee mt-8 cursor-grab [&::-webkit-scrollbar]:hidden"
  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
>
  <div className="absolute top-0 bottom-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[#fffaf8] to-transparent z-20 pointer-events-none"></div>
  <div className="absolute top-0 bottom-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#fffaf8] to-transparent z-20 pointer-events-none"></div>

  <div className="flex w-max animate-[scroll_55s_linear_infinite] group-hover/marquee:[animation-play-state:paused]">
    {[0, 1].map((set) => (
      <div key={set} className="flex gap-8 px-4 w-max">
        {products.map((product) => (
          <div
            key={`${set}-${product.id}`}
            className="w-[330px] md:w-[360px] lg:w-[390px] shrink-0 flex"
          >
            <div
              className={`flex flex-col bg-white p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] w-full ${
                product.featured
                  ? "border-[#d25f4b]/30 relative overflow-hidden"
                  : "border-gray-100"
              }`}
            >
              {product.featured && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#fbc6ba] rounded-bl-full mix-blend-multiply opacity-20 pointer-events-none"></div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`text-xs font-bold px-3 py-1 uppercase tracking-wider ${
                    product.featured
                      ? "bg-[#d25f4b]/10 text-[#d25f4b]"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {product.tag}
                </span>
              </div>

              <h3
                className="text-3xl font-bold text-[#0B1F3A] mb-2"
                style={{ fontFamily: "var(--font-playfair-display)" }}
              >
                {product.name}
              </h3>

              <div className="text-sm font-semibold text-[#d25f4b] mb-6 uppercase tracking-wide">
                {product.capacity}
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {product.desc}
              </p>

              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {product.apps.map((app, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-gray-50 border border-gray-200 text-gray-600 px-3 py-1.5 rounded-sm"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center text-sm font-medium text-gray-500 mt-auto pt-6 border-t border-gray-100">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3"></div>
                {product.payback}
              </div>
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>

  <style
    dangerouslySetInnerHTML={{
      __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `,
    }}
  />
</div>
      </div>
    </section>
  );
}
