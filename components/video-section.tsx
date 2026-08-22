"use client"

import { useEffect, useState } from "react"

export function VideoSection() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("video-section")

      if (!section) return

      const rect = section.getBoundingClientRect()
      const sectionHeight = section.offsetHeight
      const windowHeight = window.innerHeight

      const start = windowHeight
      const end = -sectionHeight

      let value = (start - rect.top) / (start - end)

      value = Math.max(0, Math.min(1, value))

      setProgress(value)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scale = 0.6 + progress * 0.4

  return (
    <section
      id="video-section"
      className="w-full py-16 md:py-24 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6">
        <video
          className="w-full h-[550px] md:h-[650px] rounded-2xl object-cover"
          src="/video/videobanya.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center",
          }}
        />
      </div>
    </section>
  )
}