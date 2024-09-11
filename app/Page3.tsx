import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="text-xl font-bold">Magic UI</div>
        <div>
          <Link href="#" className="mr-4 text-sm">
            Log in
          </Link>
          <Button variant="outline" size="sm">
            Sign up
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Magic UI is the new way
          <br />
          to build landing pages.
        </h1>
        <p className="text-xl mb-8 text-gray-400">
          Beautifully designed, animated components and templates built with
          <br />
          Tailwind CSS, React, and Framer Motion.
        </p>
        <Button size="lg">Get started for free</Button>
      </section>

      {/* Showcase Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=800"
            width={800}
            height={400}
            alt="Magic UI Showcase"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-20 px-4">
        <p className="text-center text-gray-500 mb-8">
          TRUSTED BY TEAMS FROM AROUND THE WORLD
        </p>
        <div className="flex justify-center space-x-12">
          {["Google", "Microsoft", "GitHub", "Uber", "Notion"].map((logo) => (
            <div key={logo} className="text-gray-400">
              {logo}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Simple pricing for everyone.
        </h2>
        <p className="text-xl text-center text-gray-400 mb-12">
          Choose an affordable plan thats packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              name: "Basic",
              price: "$10",
              features: [
                "AI-powered analytics",
                "Basic support",
                "Up to 10 users",
                "Access to basic AI tools",
              ],
            },
            {
              name: "Premium",
              price: "$20",
              features: [
                "Advanced AI insights",
                "Priority support",
                "Up to 50 users",
                "Access to all AI tools",
              ],
            },
            {
              name: "Enterprise",
              price: "$50",
              features: [
                "Custom AI solutions",
                "24/7 dedicated support",
                "Unlimited users",
                "Access to all AI tools",
              ],
            },
            {
              name: "Ultimate",
              price: "$80",
              features: [
                "Bespoke AI development",
                "White-glove support",
                "Unlimited users",
                "Full AI suite access",
              ],
            },
          ].map((plan) => (
            <Card
              key={plan.name}
              className="w-64 p-6 bg-gray-900 border-gray-800"
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">
                {plan.price}
                <span className="text-sm font-normal">/month</span>
              </p>
              <Button className="w-full mb-4">Subscribe</Button>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="inline-block p-2 bg-gray-800 rounded-full mb-8">
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Stop wasting time on design.
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Start your 7-day free trial. No credit card required.
        </p>
        <Button size="lg">Get Started</Button>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Magic UI</h3>
            <p className="text-gray-400">UI Library for Design Engineers</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="font-bold mb-4">PRODUCT</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="font-bold mb-4">COMMUNITY</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Twitter</li>
              <li>Discord</li>
              <li>Email</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="font-bold mb-4">LEGAL</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-400">
          <p>&copy; 2024 Magic UI. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
