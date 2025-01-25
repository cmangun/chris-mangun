"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const menuItems = [
  { title: "HOME", href: "/" },
  { title: "RESUME", href: "/resume" },
  { title: "CASE STUDIES", href: "/case-studies" },
]

const caseStudies = [
  { title: "PUBLICIS HEALTH AI-POWERED KNOWLEDGE MANAGEMENT", slug: "ai-knowledge-management" },
  { title: "PFIZER CONTENT SUPPLY CHAIN INNOVATION", slug: "content-supply-chain" },
  { title: "ABBOTT DATA INNOVATION HUB", slug: "abbott-data-innovation" },
  { title: "MEDTRONIC METHYLENE BLUE MMX + GI GENIUS", slug: "methylene-blue-gi-genius" },
  { title: "SANOFI RWE INNOVATION", slug: "rwe-innovation" },
  { title: "BI SPEVIGO LAUNCH", slug: "spevigo-launch" },
  { title: "NOVARTIS FABHALTA LAUNCH", slug: "fabhalta-launch" },
  { title: "NOVARTIS KESIMPTA MARKET TRANSFORMATION", slug: "kesimpta-transformation" },
]

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-50 p-2 bg-white text-[#5B9EA6] rounded-full shadow-lg"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-[#5B9EA6] text-white z-50 flex flex-col">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
          <nav className="flex-grow flex flex-col justify-center items-start px-8 w-full max-w-4xl mx-auto">
            <ul className="space-y-6 w-full">
              {menuItems.map((item) => (
                <li key={item.href} className="pb-6 border-b border-white/20">
                  <Link
                    href={item.href}
                    className="text-3xl font-bold hover:underline block text-left"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Case Studies</h2>
                <ul className="space-y-4">
                  {caseStudies.map((study) => (
                    <li key={study.slug}>
                      <Link
                        href={`/case-study/${study.slug}`}
                        className="text-xl hover:underline block text-left"
                        onClick={() => setIsOpen(false)}
                      >
                        {study.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}

