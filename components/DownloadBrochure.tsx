"use client";

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function DownloadBrochure() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    
    setIsSubmitting(true);
    setMessage('');

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    const templateParams = {
      name: data.user_name || 'Website Visitor',
      email: data.user_email,
      title: data.form_type || 'Brochure Download Form',
      time: new Date().toLocaleString(),
      message: `
Form Type: ${data.form_type || 'Brochure Download Form'}
Name: ${data.user_name}
Email: ${data.user_email}
Phone: +${phone}

(This user has requested to download the brochure)
      `.trim()
    };

    emailjs.send('service_8xl6sl8', 'template_6hyqu88', templateParams, 'QitSNHnMJiXkLPVB-')
      .then((result) => {
          form.current?.reset();
          setIsOpen(false);
          router.push('/thank-you');
      }, (error) => {
          setMessage('Failed to request brochure. Please try again.');
          console.error(error);
      })
      .finally(() => {
          setIsSubmitting(false);
      });
  };

  return (
    <>
      <style>{`
        @keyframes shiny-wave {
          0% { top: -50%; opacity: 0; }
          10% { opacity: 1; }
          40% { top: 150%; opacity: 0; }
          100% { top: 150%; opacity: 0; }
        }
        .shiny-wave-effect {
          animation: shiny-wave 3.5s infinite ease-in-out;
        }
      `}</style>
      {/* Sticky Button on the right */}
      <button 
        onClick={() => setIsOpen(true)}
        className="overflow-hidden fixed top-1/2 right-0 -translate-y-1/2 z-[80] bg-[#B92E28] text-white py-1 px-3.5 font-normal tracking-[0.1em] text-[16px] md:text-[18px] hover:bg-[#9E2520] "
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        aria-label="Download Brochure"
      >
        <span className="relative z-10">Download Brochure</span>
        <div className="absolute left-[-20%] w-[140%] h-[15px] bg-white/40 blur-[4px] shiny-wave-effect z-0 pointer-events-none transform rotate-12"></div>
      </button>

      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[90] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Slide-out Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[90vw] md:w-[450px] bg-white z-[100] shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
       style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">Get Our Brochure</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-800 transition-colors p-2 bg-white rounded-none shadow-sm border border-gray-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1">
          <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
            Fill out the form below to instantly download our comprehensive coconut machinery brochure and technical specifications.
          </p>
          <form ref={form} className="space-y-5" onSubmit={sendEmail}>
            <div>
              <input type="text" name="user_name" placeholder="Name" className="w-full border border-gray-300 rounded-none px-4 py-3 bg-gray-50 text-gray-900 focus:outline-none focus:border-[#B92E28] focus:ring-1 focus:ring-[#B92E28] focus:bg-white transition-all" required />
            </div>
            <div>
              <input type="email" name="user_email" placeholder="Email" className="w-full border border-gray-300 rounded-none px-4 py-3 bg-gray-50 text-gray-900 focus:outline-none focus:border-[#B92E28] focus:ring-1 focus:ring-[#B92E28] focus:bg-white transition-all" required />
            </div>
            
            {/* Phone Input with Flag (for visual similarity) */}
            <div>
  <PhoneInput
    country={"in"}
    value={phone}
    onChange={setPhone}
    inputStyle={{
      width: "100%",
      height: "48px",
      borderRadius: "0",
      border: "1px solid #d1d5db",
      fontSize: "16px",
    }}
    buttonStyle={{
      borderRadius: "0",
      border: "1px solid #d1d5db",
      borderRight: "none",
      backgroundColor: "#f9fafb",
    }}
    dropdownStyle={{
      width: "280px",
    }}
  />
</div>

            <input type="hidden" name="form_type" value="Brochure Download Form" />

            <div className="pt-6">
              <button type="submit" disabled={isSubmitting} className="w-full bg-[#B92E28] hover:bg-[#8B231E] text-white font-bold py-3.5 px-6 rounded-none transition-all duration-300 shadow-[0_4px_14px_0_rgba(185,46,40,0.39)] hover:shadow-[0_6px_20px_rgba(185,46,40,0.23)] flex items-center justify-center gap-2 uppercase tracking-wider text-sm disabled:opacity-70 disabled:cursor-not-allowed mt-2">
                {isSubmitting ? "Downloading..." : "Download Brochure"}
              </button>
            </div>
            
            {message && (
              <div className={`text-sm text-center mt-2 font-medium ${message.includes('Success') ? 'text-green-600' : 'text-red-600 italic'}`}>
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
