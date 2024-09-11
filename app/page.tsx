"use client"

// import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import Particles from "@/components/magicui/particles";
import Footer from "@/components/sections/Footer";
import FAQs from "@/components/sections/FAQs";
import LogoGrid from "@/components/sections/LogoGrid";
import { FeaturesSectionDemo } from "@/components/example/features-section-demo";

// export const metadata: Metadata = {
//   title: "SocialPro - Social Media Management Platform",
//   description: "Manage all your social media accounts in one place",
// };

export default function Page() {
  return (
    <main className="relative p-4 overflow-hidden">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
        staticity={50}
      />
      <Hero />
      <LogoGrid/>
      <Features />
      {/* <FeaturesSectionDemo/> */}
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQs/>
      <CTA />
      <Footer/>
    </main>
  );
}
