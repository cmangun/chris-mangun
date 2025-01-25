import type { Metadata } from "next"
import type { ReactNode } from "react"
import HamburgerMenu from "./components/hamburger-menu"
import "./globals.css"

export const metadata: Metadata = {
  title: "Chris Mangun - Healthcare AI/ML Transformation Lead",
  description: "Healthcare innovation and AI/ML transformation portfolio",
  robots: "nofollow, noindex",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[#5B9EA6] flex flex-col">
          <header className="w-full bg-[#5B9EA6] py-4 px-6 md:px-12">
            <HamburgerMenu />
          </header>
          <main className="flex-grow pt-8">{children}</main>
        </div>
      </body>
    </html>
  )
}

