import React from 'react'
import Particles from '../magicui/particles'
import Meteors from '../magicui/meteors'
import ShimmerButton from '../magicui/shimmer-button'
import ShinyButton from '../magicui/shiny-button'
import HeroVideoDialog from '../magicui/hero-video-dialog'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: "url('/Hero-background.png')",
          filter: "brightness(0.6)"
        }}
      />

      {/* Background Particles */}
      <Particles 
        className="absolute inset-0 -z-10" 
        quantity={100} 
        staticity={50} 
        color="#ffffff" 
        size={0.2}
        ease={100}
      />
      
      {/* Meteors Effect */}
      <div className="absolute inset-0 -z-5 self-start">
        <Meteors number={10} />
      </div>
      
      <div className="container mx-auto px-4 z-10 pt-20 pb-32">
        <div className="flex flex-col items-center text-center py-32 ">
          <Image src="/vercel.svg"  alt="Logo" width={80} height={80} className="mb-8 bg-white h-fit" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white max-w-4xl">
            Revolutionize Your Workflow with AI-Powered Assistance
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl">
            Enhance productivity and streamline tasks with our cutting-edge AI solutions
          </p>
          
          <div className="flex justify-center space-x-4 mb-16">
            <ShimmerButton className="px-8 py-4">
              <span className="text-white text-lg font-semibold">Get Started</span>
            </ShimmerButton>
            <ShinyButton text="Learn More" className="px-8 py-4 text-lg" />
          </div>
          
        </div>
          <HeroVideoDialog
            videoSrc="https://www.youtube.com/embed/your-video-id"
            thumbnailSrc="/chatbot-screenshot.png"
            thumbnailAlt="AI Assistant Demo"
            className="max-w-4xl mx-auto aspect-video"
          />
      </div>

      {/* Bottom badges */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 bg-white">
        <Image src="/vercel.svg" alt="Badge 1" width={100} height={40} />
        <Image src="/vercel.svg" alt="Badge 2" width={100} height={40} />
        <Image src="/vercel.svg" alt="Badge 3" width={100} height={40} />
      </div>
    </div>
  )
}

export default Hero