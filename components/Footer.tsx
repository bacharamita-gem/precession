import React from 'react';

export default function Footer() {
  return (
    <footer
  className="w-full bg-[#0B1F3A] pt-6 pb-4 border-t-4 border-[#d25f4b]"
  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand Col (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <img
  src="/logo/gem_logo.png"
  alt="Gem Drytech Systems LLP"
  className="h-14 md:h-16 w-auto mb-3"
/>
            <div className="text-[#d25f4b] text-[10px] uppercase tracking-widest font-bold mb-4">Engineered Drying Since 1998</div>
            <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-sm">
              Belt, Band, Rotary, and Flash Dryers engineered for Food processing, Coconut, Cereal, specialty products, and Industrial applications. 112+ dryers delivered. 15+ countries. 88% repeat order rate.
            </p>
            
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors" title="Facebook">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#E4405F] transition-colors" title="Instagram">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors" title="LinkedIn">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
              </a>
              <a
              href="https://www.youtube.com/@gemdrytechsystemsindia"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#FF0000] transition-colors"
              title="YouTube"
             >
             <svg
             className="w-7 h-7 fill-current"
             viewBox="0 0 24 24"
             >
             <path d="M21.58 7.19C21.35 6.31 20.69 5.65 19.81 5.42C18.25 5 12 5 12 5S5.75 5 4.19 5.42C3.31 5.65 2.65 6.31 2.42 7.19C2 8.75 2 12 2 12S2 15.25 2.42 16.81C2.65 17.69 3.31 18.35 4.19 18.58C5.75 19 12 19 12 19S18.25 19 19.81 18.58C20.69 18.35 21.35 17.69 21.58 16.81C22 15.25 22 12 22 12S22 8.75 21.58 7.19ZM10 15V9L15.2 12L10 15Z" />
             </svg>
              </a>
            </div>
          </div>

          {/* Products Link Col */}
          <div>
            <h5 className="text-white font-bold mb-6 tracking-wide">Products</h5>
            <ul className="space-y-4">
              <li><a href="#Products" className="text-sm text-gray-400 hover:text-white transition-colors">Belt Dryers (10–100 TPD)</a></li>
              <li><a href="#Products" className="text-sm text-gray-400 hover:text-white transition-colors">Band Dryers (5–30 TPD)</a></li>
              <li><a href="#Products" className="text-sm text-gray-400 hover:text-white transition-colors">Rotary Dryers (50+ TPD)</a></li>
              <li><a href="#Products" className="text-sm text-gray-400 hover:text-white transition-colors">Flash Dryers</a></li>
              <li><a href="#Products" className="text-sm text-gray-400 hover:text-white transition-colors">Paddle Dryers</a></li>
              <li><a href="#Products" className="text-sm text-gray-400 hover:text-white transition-colors">Vibratory Fluid Bed Dryers</a></li>

            </ul>
          </div>

          {/* Verticals Link Col */}
          <div>
            <h5 className="text-white font-bold mb-6 tracking-wide">Verticals</h5>
            <ul className="space-y-4">
              <li><a href="#Verticals" className="text-sm text-gray-400 hover:text-white transition-colors">Coconut Processing</a></li>
              <li><a href="#Verticals" className="text-sm text-gray-400 hover:text-white transition-colors">Cereal & Nuts</a></li>
              <li><a href="#Verticals" className="text-sm text-gray-400 hover:text-white transition-colors">Cranberry & Fruit</a></li>
              <li><a href="#Verticals" className="text-sm text-gray-400 hover:text-white transition-colors">Specialty Foods</a></li>
              <li><a href="#Verticals" className="text-sm text-gray-400 hover:text-white transition-colors">Rubber & Fibers</a></li>
              <li><a href="#Verticals" className="text-sm text-gray-400 hover:text-white transition-colors">Fertilizers</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h5 className="text-white font-bold mb-6 tracking-wide">Contact</h5>
            <address className="not-italic text-sm text-gray-400 leading-relaxed mb-4">
              Gem Drytech Systems LLP<br />
              10/C Middleton Row, 3rd Floor<br />
              Kolkata 700071, India
            </address>
            <div className="space-y-2">
              <a href="mailto:info@gemdryers.com" className="block text-sm text-[#d25f4b] hover:text-[#fbc6ba] transition-colors font-medium">info@gemdryers.com</a>
              <a href="tel:+919831173874" className="block text-sm text-gray-400 hover:text-white transition-colors">+91 98311 73874</a>
              <a href="https://www.gemdrytech.com" className="block text-sm text-gray-400 hover:text-white transition-colors">www.gemdrytech.com</a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div>© 2026 Gem Drytech Systems LLP. All rights reserved. · LLPIN: AAY-1022</div>
          <div className="font-semibold tracking-wide text-[#d25f4b]">Recognized Export House · Govt. of India · Est. 1998</div>
        </div>

      </div>
    </footer>
  );
}
