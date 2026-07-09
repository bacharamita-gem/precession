import React from "react";

export default function Verticals() {
  const verticals = [
    {
      icon: "🥥",
      title: "Coconut Processing",
      desc: "Desiccated coconut, coconut cream powder, and desiccated coconut lines. Live references across Philippines, Sri Lanka, Indonesia. Franklin Baker — the global benchmark — is a repeat client.",
      payback: "Belt Dryer · 3,250mm Wide Belt Available",
    },
    {
      icon: "🌾",
      title: "Cereal, Nuts & Snacks",
      desc: "Nuts drying and processing lines from receiving to packing. Mayora Group, Indonesia — 4+ years continuous operation, spares cost below 0.5% of machine value.",
      payback: "Belt / Band Dryer · Full Line Engineering Available",
    },
    {
      icon: "🍒",
      title: "Cranberry & Fruit Pomace",
      desc: "Consolidation of multiple legacy dryers into single high-capacity belt dryer. NLFP LLC, USA — three dryers replaced by one; 5× the existing capacity, lower energy draw.",
      payback: "Belt Dryer · US Installations · Direct References",
    },
    {
      icon: "🌿",
      title: "Specialty Food & Ingredients",
      desc: "HACCP, FDA, ISO 22000, BRCGS, and USDA-compliant construction for food-grade drying. Rice cakes, bakery by-products, specialty ingredients.",
      payback: "All Dryer Types · Stainless Construction Standard",
    },
    {
      icon: "🧶",
      title: "Synthetic Rubber & Fibers",
      desc: "Continuous drying for synthetic rubber, natural rubber, and fibrous polymers. Consistent moisture removal without degrading material integrity.",
      payback: "Band / Belt Dryer · High Temperature Zone Control",
    },
    {
      icon: "⚗️",
      title: "Fertilizers & Agro Inputs",
      desc: "High-volume drying of fertilizer granules, agro-chemical inputs, and soil conditioners. Rotary drum systems for abrasive and coarse material handling.",
      payback: "Rotary Dryer · 50+ TPD Throughput",
    },
    {
  icon: "🧪",
  title: "Chemical Processing",
  desc: "Continuous drying of filter cake, pigments, resins, salts, polymers, and specialty chemicals with precise temperature control and consistent product quality.",
  payback: "Paddle · Belt · Flash Dryer",
},
{
  icon: "💊",
  title: "Pharmaceuticals",
  desc: "GMP-compliant drying systems for APIs, intermediates, herbal extracts, and pharmaceutical ingredients requiring hygienic and controlled processing.",
  payback: "VFBD · Paddle · Tray Dryer",
},
{
  icon: "🏭",
  title: "Municipal Sludge",
  desc: "Reduce sludge volume by up to 80%, minimize disposal costs, eliminate odors, and convert biosolids into reusable fuel or fertilizer.",
  payback: "Belt · Paddle Dryer",
},
{
  icon: "🏗️",
  title: "Industrial Sludge",
  desc: "Dry ETP sludge, filter press cake, and hazardous industrial residues for easier handling, lower transportation costs, and sustainable disposal.",
  payback: "Paddle · Belt Dryer",
},
{
  icon: "🌱",
  title: "Biomass & Bioenergy",
  desc: "Dry biomass, bagasse, sawdust, wood chips, RDF, and agricultural residues to improve combustion efficiency and energy recovery.",
  payback: "Rotary · Belt Dryer",
},
{
  icon: "🐟",
  title: "Seafood Processing",
  desc: "Fish meal, shrimp waste, crab shell, squid waste, and seafood by-products processed into stable, value-added products.",
  payback: "Belt · Paddle Dryer",
},
{
  icon: "🥩",
  title: "Meat & Poultry",
  desc: "Dry poultry litter, blood meal, meat meal, feather meal, and rendering by-products with continuous hygienic processing.",
  payback: "Rotary · Belt Dryer",
},
{
  icon: "🥬",
  title: "Fruit & Vegetable",
  desc: "Dry fruits, vegetables, herbs, spices, mushrooms, and botanical ingredients while preserving color, aroma, and nutritional value.",
  payback: "Belt · VFBD",
},
{
  icon: "☕",
  title: "Coffee, Tea & Spices",
  desc: "Continuous drying of coffee beans, tea leaves, pepper, turmeric, ginger, chilli, and spice blends with controlled moisture reduction.",
  payback: "Belt · Band Dryer",
},
{
  icon: "🌽",
  title: "Grains & Pulses",
  desc: "Efficient drying of rice, maize, wheat, pulses, seeds, and cereals to improve shelf life and storage stability.",
  payback: "Band · Belt Dryer",
},
{
  icon: "🍬",
  title: "Sugar & Starch",
  desc: "Dry starch, glucose products, sugar derivatives, cassava products, and food ingredients with high thermal efficiency.",
  payback: "Tube Bundle · Flash Dryer",
},
{
  icon: "🧂",
  title: "Minerals & Salts",
  desc: "Dry industrial minerals, silica, gypsum, bentonite, kaolin, lime, and specialty salts for mining and process industries.",
  payback: "Rotary · Flash Dryer",
},
{
  icon: "♻️",
  title: "Waste Recycling",
  desc: "Convert industrial waste streams into reusable products through efficient moisture reduction and continuous thermal drying.",
  payback: "Belt · Paddle Dryer",
},
{
  icon: "🌲",
  title: "Wood & Forestry",
  desc: "Dry wood chips, sawdust, bark, pellets, and forestry residues for biomass fuel and industrial applications.",
  payback: "Rotary · Belt Dryer",
},
{
  icon: "🧴",
  title: "Cosmetics & Personal Care",
  desc: "Dry cosmetic powders, botanical extracts, herbal ingredients, and specialty formulations with hygienic processing.",
  payback: "VFBD · Paddle Dryer",
},
  ];

  return (
    <section
      className="w-full py-24 bg-white font-sans border-t border-gray-100"
      id="Verticals"
     style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <p className="text-[11px] tracking-[3px] uppercase text-[#d25f4b] font-bold mb-4">
            Where We Work
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-[1.1]"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            If it has moisture in it,
            <br />
            <em className="text-[#C0392B] italic font-medium">
              we&apos;ve dried it.
            </em>
          </h2>
        </div>

        <div
  className="relative w-full overflow-x-auto overflow-y-hidden group/marquee mt-8 cursor-grab [&::-webkit-scrollbar]:hidden"
  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
>
  <div className="absolute top-0 bottom-0 left-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
  <div className="absolute top-0 bottom-0 right-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

  <div className="flex w-max animate-[scrollLeftToRight_350s_linear_infinite] group-hover/marquee:[animation-play-state:paused]">
    {[...Array(8)].map((_, set) => (
      <div key={set} className="flex gap-8 px-4 w-max">
        {verticals.map((item, index) => (
          <div
            key={`${set}-${index}`}
            className="w-[330px] md:w-[380px] shrink-0 group flex flex-col bg-[#fffaf8] p-8 md:p-10 border border-[#d25f4b]/10 shadow-sm hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-4xl mb-6 bg-white w-16 h-16 flex items-center justify-center rounded-full shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>

            <h3
              className="text-2xl font-bold text-[#0B1F3A] mb-4"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
              {item.desc}
            </p>

            <div className="text-xs font-semibold text-[#d25f4b] uppercase tracking-wider mt-auto pt-6 border-t border-[#d25f4b]/10">
              {item.payback}
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>

  <style
    dangerouslySetInnerHTML={{
      __html: `
        @keyframes scrollLeftToRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `,
    }}
  />
</div>
      </div>
    </section>
  );
}
