import Hero from "@/components/Hero";
import HeroStats from "@/components/HeroStats";
import Marquee from "@/components/Marquee";
import TrustBar from "@/components/TrustBar";
import Pitfalls from "@/components/Pitfalls";
import Products from "@/components/Products";
import Verticals from "@/components/Verticals";
import Specs from "@/components/Specs";
import Process from "@/components/Process";
import Cases from "@/components/Cases";
import Testimonials from "@/components/Testimonials";
import PromiseSection from "@/components/Promise";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-950"
    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <Hero />
      <HeroStats />
      <Marquee />
      <TrustBar />
      <Pitfalls />
      <Products />
      <Verticals />
      <Specs />
      <Process />
      <Cases />
      <Testimonials />
      <PromiseSection />
      <CTA />
      <Footer />
    </main>
  );
}
