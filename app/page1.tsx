import BlurIn from "@/components/magicui/blur-in";
import Particles from "@/components/magicui/particles";
import { Github, Twitter } from "lucide-react";
import HeroVideoDialogDemoTopInBottomOut from "@/components/example/hero-video-dialog-demo-top-in-bottom-out";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MarqueeDemoVertical } from "@/components/example/marqueeExample";
import { SocialProofCompanies } from "@/components/example/socialProof";
import { BentoDemo } from "@/components/example/BentoExample";
import { TextHoverEffect } from "@/components/aceternity/text-hover-effect";
import ShinyButton from "@/components/magicui/shiny-button";
import ShimmerButton from "@/components/magicui/shimmer-button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            AI ChatBot
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link
              href="#features"
              className="hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#reviews"
              className="hover:text-primary transition-colors"
            >
              Reviews
            </Link>
            <Link href="#cta" className="hover:text-primary transition-colors">
              Get Started
            </Link>
            <Button variant="outline" size="sm">
              Login
            </Button>
          </div>
          <ShinyButton text="Signup" className="md:hidden"/>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20">
          <Particles
            className="absolute inset-0 opacity-40"
            quantity={100}
            staticity={50}
            color="#ffffff"
            ease={50}
          />

          <div className="z-10 text-center mb-12 max-w-[80vw] pt-40">
            <BlurIn
              word="Experience the future of intelligent conversations"
              className="text-xl md:text-2xl mb-8"
              duration={1.5}
            />
            <p className="text-lg text-gray-300 mb-8 px-4">
              Unlock the power of AI-driven communication. Get instant, smart
              responses tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <ShimmerButton className="text-primary-foreground" >
                Get Started
              </ShimmerButton>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative z-10 w-full max-w-5xl mt-12 px-4">
            <HeroVideoDialogDemoTopInBottomOut />
          </div>
        </section>

        <section className="py-12 bg-gradient-to-r from-gray-900 to-black">
          <SocialProofCompanies />
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-20 bg-gradient-to-b from-gray-900 to-black"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Features
            </h2>
            <BentoDemo />
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section
          id="reviews"
          className="py-20 bg-gradient-to-r from-primary to-primary-dark"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What Our Users Say
            </h2>
            <MarqueeDemoVertical />
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="cta"
          className="py-20 bg-gradient-to-b from-black to-gray-900"
        >
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start?
            </h2>
            <p className="text-xl mb-8">
              Experience the power of AI-driven conversations today!
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white"
            >
              Get Started for Free
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">AI ChatBot</h3>
              <p className="text-gray-400">Empowering conversations with AI</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="hover:text-primary transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#reviews"
                    className="hover:text-primary transition-colors"
                  >
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect with Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2023 AI ChatBot. All rights reserved.</p>
          </div>
        </div>
        <div className="h-[20rem] flex items-center justify-center">
          <TextHoverEffect text="CHATBOT" />
        </div>
      </footer>
    </div>
  );
}
