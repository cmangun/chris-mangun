"use client"

import { useState, useRef } from "react"
import { Play, ChevronDown } from "lucide-react"
import { VideoOverlay } from "./components/video-overlay"

export default function Page() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const resumeRef = useRef<HTMLDivElement>(null)

  const scrollToResume = () => {
    resumeRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <div className="min-h-screen bg-[#5B9EA6] flex flex-col">
        {/* Hero Section */}
        <div className="flex-grow p-6 md:p-12 flex flex-col">
          <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col">
            {/* Name and Title Section */}
            <div className="mb-8 md:mb-16">
              <h1 className="text-white text-4xl md:text-7xl font-bold tracking-wide">CHRIS MANGUN</h1>
              <h2 className="text-white text-xl md:text-2xl mt-2">AI/ML Healthcare Transformation Lead</h2>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start flex-grow">
              {/* Video Section */}
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

              {/* Right Content Section */}
              <div className="space-y-8 md:space-y-12">
                <h3 className="text-white text-3xl md:text-5xl font-bold leading-tight">
                  A SHORT POV VIDEO ABOUT HEALTHCARE INNOVATIONS
                </h3>

                {/* Resume Section */}
                <div>
                  <h4 className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-6">RESUME </h4>
                  <ul className="space-y-2 md:space-y-3 text-white text-base md:text-lg">
                    <li>17+ years Healthcare Innovation</li>
                    <li>Stanford AI/ML Healthcare Specialized</li>
                    <li>Lean Six Sigma Black Belt</li>
                    <li>AI Project Management Certified</li>
                    <li>Agile Scrum Master Certified</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Down Arrow */}
            <div className="flex justify-center mt-8 md:mt-12">
              <button
                onClick={scrollToResume}
                className="focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2"
              >
                <ChevronDown className="w-8 h-8 md:w-12 md:h-12 text-white animate-bounce" />
              </button>
            </div>
          </div>
        </div>

        {/* Resume Section */}
        <div ref={resumeRef} className="bg-white py-16 md:py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">AI/ML Healthcare Transformation Lead</h2>

            {/* Pfizer Colab */}
            <div className="mb-8 md:mb-12">
              <h3 className="text-[#5B9EA6] text-xl md:text-2xl font-bold mb-2">PFIZER COLAB - PUBLICIS HEALTH</h3>
              <p className="text-gray-600 mb-4">Production Delivery Lead & AI SME 2024 - Present</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Architected first-in-industry RAG-based knowledge management system for Colab</li>
                <li>Leading Pfizer's largest brand initiatives including Abrysvo RSV & Comirnaty vaccines</li>
                <li>Driving enterprise-wide AI implementation and digital transformation</li>
              </ul>
            </div>

            {/* IPG Prohealth */}
            <div className="mb-8 md:mb-12">
              <h3 className="text-[#5B9EA6] text-xl md:text-2xl font-bold mb-2">IPG PROHEALTH & AREA 23</h3>
              <p className="text-gray-600 mb-4">PMO Lead & AI SME 2020 - 2024</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Launched DELCI, first-to-pharma AI Guide for Kesimpta, a Digital Education Lab</li>
                <li>Managed $51M portfolio across Novartis (6 brands) and Sanofi (7 brands)</li>
                <li>Led implementation of content strategies and RWE platforms for Sanofi</li>
                <li>Directed team of 60+ across project management and creative functions</li>
              </ul>
            </div>

            {/* Abbott Labs */}
            <div className="mb-8 md:mb-12">
              <h3 className="text-[#5B9EA6] text-xl md:text-2xl font-bold mb-2">ABBOTT LABS DATA & MACHINE LEARNING</h3>
              <p className="text-gray-600 mb-4">Senior Scrum Master 2018 - 2020</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Led agile transformation of Abbott's global data ecosystem</li>
                <li>Orchestrated migration of 27,000-machine data pipeline to AWS</li>
                <li>Achieved 65% improvement in data retrieval efficiency</li>
              </ul>
            </div>

            {/* Boundless Life Science */}
            <div className="mb-8 md:mb-12">
              <h3 className="text-[#5B9EA6] text-xl md:text-2xl font-bold mb-2">BOUNDLESS LIFE SCIENCE GROUP (HCB)</h3>
              <p className="text-gray-600 mb-4">Associate Director, Project Management 2017 - 2018</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Assisted Strategy for GI Genius™ AI system for adenoma detection</li>
                <li>Directed launch strategies for three pharmaceutical brands ($5M)</li>
                <li>Implemented agile methodologies for cross-functional healthcare teams</li>
              </ul>
            </div>

            {/* Syneos Health */}
            <div className="mb-8 md:mb-12">
              <h3 className="text-[#5B9EA6] text-xl md:text-2xl font-bold mb-2">SYNEOS HEALTH GSW INNOVATION LAB</h3>
              <p className="text-gray-600 mb-4">Senior Digital Program Manager 2014 - 2017</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Created SOW & Staffing for ($12M) for Eli Lilly (Cyramza), BI (Atrovent & Pradaxa)</li>
                <li>Launched Amgen (Biosimilars & Repatha)</li>
                <li>Producer MM&M Best TV Advertising Campaign of 2016 "Pradaxa - Red Fish"</li>
              </ul>
            </div>

            {/* Concentric Health */}
            <div className="mb-8 md:mb-12">
              <h3 className="text-[#5B9EA6] text-xl md:text-2xl font-bold mb-2">CONCENTRIC HEALTH EXPERIENCE</h3>
              <p className="text-gray-600 mb-4">Digital Designer & CRM Producer 2007 - 2011</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Lead producer for rebranding Enbrel HCP CRM</li>
                <li>Launched Xifaxan</li>
                <li>Producer MM&M Best TV Self Promotion Advertising Campaign of 2012</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="text-gray-600 text-right">
              <p>cmangun@gmail.com // 917.717.1894</p>
            </div>
          </div>
        </div>
      </div>

      <VideoOverlay isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} videoId="690222676" />
    </>
  )
}

