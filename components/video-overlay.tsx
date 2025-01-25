"use client"

import { X } from "lucide-react"

interface VideoOverlayProps {
  isOpen: boolean
  onClose: () => void
  videoId: string
}

export function VideoOverlay({ isOpen, onClose, videoId }: VideoOverlayProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors"
        aria-label="Close video"
      >
        <X className="w-8 h-8" />
      </button>
      <div className="w-full h-full">
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`}
          className="w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  )
}

