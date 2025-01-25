"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const menuItems = [
  { title: "HOME", href: "/" },
  { title: "RESUME", href: "/resume" },
  { title: "CASE STUDIES", href: "/case-studies" },
]

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-white text-[#5B9EA6] rounded-xl shadow-lg flex items-center space-x-2"
        aria-label="Open menu"
      >
        <Menu size={24} />
        <span className="font-semibold">Menu</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-[#5B9EA6] text-white z-50 overflow-y-auto">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
          <nav className="min-h-screen flex flex-col justify-center items-start px-8 w-full max-w-4xl mx-auto py-16">
            <ul className="space-y-6 w-full">
              {menuItems.map((item) => (
                <li key={item.title} className="pb-6">
                  <Link
                    href={item.href}
                    className="text-3xl font-bold hover:underline block text-left"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}

