"use client"
import React from 'react'
import Particles from '@/components/magicui/particles'
import HeroVideoDialog from '@/components/magicui/hero-video-dialog'
import Marquee from '@/components/magicui/marquee'
import { SocialProofCompanies } from '@/components/example/socialProof'
import { MarqueeDemoVertical } from '@/components/example/marqueeExample'
import { BentoGrid, BentoCard } from '@/components/magicui/bento-grid'
import { TextHoverEffect } from '@/components/aceternity/text-hover-effect'
import ShimmerButton from '@/components/magicui/shimmer-button'
import { Meteors } from '@/components/magicui/meteors'

const Page = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 text-white">
      {/* Background Particles */}
      <Particles className="absolute inset-0 -z-10" />

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="mb-4 text-5xl font-bold">Manage Your Social Media Like a Pro</h1>
            <p className="mb-8 text-xl">Streamline your social presence with our all-in-one platform</p>
            <ShimmerButton className="px-8 py-3 text-lg">Get Started</ShimmerButton>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <HeroVideoDialog
            videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
            thumbnailSrc="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
            thumbnailAlt="Product Demo"
          />
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-semibold">Trusted By</h2>
          <Marquee className="py-4">
            <SocialProofCompanies />
          </Marquee>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-semibold">Our Features</h2>
          <BentoGrid className="max-w-4xl mx-auto">
            <BentoCard
              name="Content Scheduling"
              description="Plan and schedule your posts across multiple platforms"
              Icon={() => <span className="text-4xl">📅</span>}
              className="col-span-1"
              background={<Meteors number={20} />}
              href="#"
              cta="Learn More"
            />
            <BentoCard
              name="Analytics Dashboard"
              description="Get insights on your social media performance"
              Icon={() => <span className="text-4xl">📊</span>}
              className="col-span-2"
              background={<Meteors number={20} />}
              href="#"
              cta="Explore Analytics"
            />
            <BentoCard
              name="Engagement Tools"
              description="Interact with your audience efficiently"
              Icon={() => <span className="text-4xl">💬</span>}
              className="col-span-1"
              background={<Meteors number={20} />}
              href="#"
              cta="See Tools"
            />
            <BentoCard
              name="AI-Powered Suggestions"
              description="Get content ideas and optimization tips"
              Icon={() => <span className="text-4xl">🤖</span>}
              className="col-span-1"
              background={<Meteors number={20} />}
              href="#"
              cta="Discover AI"
            />
          </BentoGrid>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-semibold">What Our Customers Say</h2>
          <div className="h-[400px]">
            <MarqueeDemoVertical />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold">Ready to Elevate Your Social Media Game?</h2>
          <p className="mb-8 text-xl">Join thousands of businesses already using our platform</p>
          <ShimmerButton className="px-8 py-3 text-lg">Start Your Free Trial</ShimmerButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center">
        <p>&copy; 2023 Social Media Management Platform. All rights reserved.</p>
        <div className="mt-4">
          <TextHoverEffect text="Powered by AI" />
        </div>
      </footer>
    </div>
  )
}

export default Page