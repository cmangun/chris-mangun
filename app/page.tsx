"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { VideoOverlay } from "./components/video-overlay"

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <div className="flex-grow p-6 md:p-12 flex flex-col">
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col">
        <div className="mb-8 md:mb-16">
          <h1 className="text-white text-4xl md:text-7xl font-bold tracking-wide">CHRIS MANGUN</h1>
          <h2 className="text-white text-xl md:text-2xl mt-2">Healthcare AI/ML Transformation Lead</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start flex-grow">
          <button
            onClick={() => setIsVideoOpen(true)}
            className="relative aspect-video bg-white/20 rounded-3xl overflow-hidden backdrop-blur-sm transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#5B9EA6]"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center mb-4 md:mb-6 transition-transform group-hover:scale-110">
                <Play className="w-8 h-8 md:w-12 md:h-12 text-[#5B9EA6] translate-x-0.5" />
              </div>
              <p className="text-white text-xl md:text-3xl font-light">How can I help you?</p>
            </div>
          </button>

          <div className="space-y-8 md:space-y-12">
            <h3 className="text-white text-3xl md:text-5xl font-bold leading-tight"></h3>

            <div>
              <h4 className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-6">Certified</h4>
              <ul className="space-y-2 md:space-y-3 text-white text-base md:text-lg">
                <li>Stanford AI/ML Healthcare Specialized</li>
                <li>Lean Six Sigma Black Belt</li>
                <li>AI Project Management Certified</li>
                <li>Agile Scrum Master Certified</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <VideoOverlay isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} videoId="690222676" />
    </div>
  )
}

