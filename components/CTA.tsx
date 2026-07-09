"use client";

import React, { useState, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function CTA() {
  const form = useRef<HTMLFormElement>(null);
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call for demonstration since we don't have EmailJS hooked up here yet
    setTimeout(() => {
      setIsSubmitting(false);
      setMessage("Message sent successfully! We'll be in touch soon.");
      if (form.current) form.current.reset();
      setPhone("");
    }, 1500);
  };

  return (
    <section
      className="w-full py-24 bg-[#fffaf8] font-sans border-t border-[#d25f4b]/10"
      id="contact"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Side: CTA Content */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            <p className="text-[11px] tracking-[3px] uppercase text-[#d25f4b] font-bold mb-4">
              Ready to Start?
            </p>

            <h2
              className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              Send us a sample.
              <br />
              <em className="text-[#C0392B] italic font-medium">
                We'll send you data.
              </em>
            </h2>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed pr-4">
              Ship us a small quantity of your product. We run pilot drying
              trials at our Kolkata facility and return real moisture curves,
              throughput numbers, and a dryer specification — within 5 working
              days. No obligation to proceed.
            </p>

            <div className="mb-10 text-center">
  <p className="text-xl md:text-2xl font-semibold text-[#C0392B]">
    Request a Pilot Trial →
  </p>
</div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 font-medium tracking-wide">
                Reach Us At: <br className="sm:hidden" />
                <a
                  href="mailto:info@gemdryers.com"
                  className="text-[#0B1F3A] font-bold hover:text-[#d25f4b] transition-colors"
                >
                  info@gemdryers.com
                </a>
                <span className="hidden sm:inline"> · </span>
                <a
                  href="tel:+919831173874"
                  className="text-[#0B1F3A] font-bold hover:text-[#d25f4b] transition-colors"
                >
                  +91 98311 73874
                </a>
              </p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-none md:rounded-none shadow-sm border border-gray-100 p-6 md:p-8">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Full name"
                    className="w-full px-4 py-2.5 rounded-none border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all text-gray-900 text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    placeholder="Company name"
                    className="w-full px-4 py-2.5 rounded-none border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all text-gray-900 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-none border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all text-gray-900 text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Phone / WhatsApp
                  </label>
                  <div>
                    <PhoneInput
                      country={"in"}
                      value={phone}
                      onChange={setPhone}
                      inputStyle={{
                        width: "100%",
                        height: "42px",
                        borderRadius: "0",
                        border: "1px solid #d1d5db",
                        fontSize: "16px",
                        color: "#6b7280",
                      }}
                      buttonStyle={{
                        borderRadius: "0",
                        border: "1px solid #d1d5db",
                        borderRight: "none",
                        backgroundColor: "#f9fafb",
                        color: "#6b7280",
                      }}
                      dropdownStyle={{
                        width: "280px",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Country / Location
                </label>
                <input
                  type="text"
                  name="country"
                  required
                  placeholder="Country where the plant will be installed"
                  className="w-full px-4 py-2.5 rounded-none border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all text-gray-900 text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="Turning Waste Stream into Revenue System"
                  className="w-full px-4 py-2.5 rounded-none border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all resize-none text-gray-900 text-sm"
                ></textarea>
              </div>

              <input type="hidden" name="form_type" value="Main Contact Form" />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#B92E28] hover:bg-[#9d2722] text-white font-bold text-[15px] md:text-base py-3 rounded-none transition-all shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/30 flex justify-center items-center gap-2 group mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
                {!isSubmitting && (
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                )}
              </button>

              {message && (
                <div
                  className={`text-sm text-center mt-2 font-medium ${message.includes("success") ? "text-green-600" : "text-red-600 italic"}`}
                >
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
