"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import HeroStats from "./HeroStats";
import Marquee from "./Marquee";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";

export default function Hero() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setMessage("");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
      )
      .then(
        () => {
          setMessage("Message sent successfully!");
          setIsSubmitting(false);
          if (form.current) form.current.reset();
          setPhone("");
        },
        () => {
          setMessage("Failed to send the message, please try again.");
          setIsSubmitting(false);
        },
      );
  };

  return (
    <section className="relative w-full py-4 md:py-16 px-4 md:px-4 border-t border-gray-200 overflow-hidden"
    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      {/* Animated Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-black/00"
        style={{ backgroundImage: "url('/Hero/Bis.png')" }}
        ></div>
        {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-black/00"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-2 flex flex-col items-center justify-between text-left gap-12 lg:gap-20">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          {/* Left Column */}
          <div className="flex-1 flex flex-col items-start w-full">
            {/* Tagline */}
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#d25f4b]/30 bg-[#d25f4b]/5 mb-5">
              <div className="w-2 h-2 rounded-full bg-[#d25f4b]"></div>
              <span className="text-xs font-semibold tracking-[0.15em] text-white uppercase">
                      Est. 1998 · Kolkata, India
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl md:text-6xl  font-bold tracking-tight mb-6 leading-[1.1] text-white"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              Precision Drying.
              <br />
              <em className="font-semibold italic text-[#C0392B]">
                The Right Moisture.
              </em>
              <br />
              Every Time.
            </h1>

            {/* Sub-headline */}
            <p className="max-w-2xl text-lg md:text-xl text-gray-600 mb-12 leading-relaxed font-sans">
             
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 lg:mb-24">
              <Link
                href="#contact"
                className="px-8 py-4 bg-[#cc4630] text-white font-sans font-semibold transition-all hover:bg-[#b03a26]"
              >
                Request a Pilot Trial
              </Link>
              <Link
                href="#products"
                className="px-8 py-4 border border-gray-300 text-[#2c3e50] font-sans font-semibold transition-all hover:bg-gray-50 hover:border-gray-400 bg-white/50 backdrop-blur-sm"
              >
                View Products
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex justify-end items-end lg:items-end w-full lg:mt-12">
            <div className="bg-white/90 opacity-90 p-6 md:p-8 rounded-none shadow-xl border border-gray-100 w-full md:max-w-[50%]">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">
                Contact Us
              </h2>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-3"
              >
                <div>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                    className="w-full px-3 py-2 text-gray-600 rounded-none border-2 border-gray-400 focus:border-red-600  outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                    className="w-full px-3 py-2 text-gray-600 rounded-none border-2 border-gray-400 focus:border-red-600  outline-none"
                  />
                </div>
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
                <div>
                  <textarea
                    name="user_message"
                    placeholder="Message"
                    rows={2}
                    className="w-full px-3 py-2 text-gray-600 rounded-none border-2 border-gray-400 focus:border-red-600  outline-none"
                  ></textarea>
                </div>
                <input
                  type="hidden"
                  name="form_type"
                  value="Hero Contact Form"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-1 bg-gray-900 text-white font-bold py-3 rounded-none hover:bg-gray-800 transition-colors shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed text-sm"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {message && (
                  <div
                    className={`text-sm text-center mt-1 ${message.includes("success") ? "text-green-600" : "text-red-600 italic"}`}
                  >
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
