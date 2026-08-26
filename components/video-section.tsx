
"use client"

import { useEffect, useRef, useState } from "react"

export function VideoSection() {
  const [progress, setProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

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

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    const section = document.getElementById("video-section")

    if (!video || !section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Видео появилось на экране — начинаем сначала
          video.currentTime = 0

          video.play().catch(() => {})
        } else {
          // Ушли от видео — останавливаем и сбрасываем
          video.pause()
          video.currentTime = 0
        }
      },
      {
        threshold: 0.5,
      },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
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
          ref={videoRef}
          className="w-full h-[550px] md:h-[650px] rounded-2xl object-cover"
          src="/video/videobanya.mp4"
          muted
          playsInline
          controls={false}
          preload="auto"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center",
          }}
        />
      </div>
    </section>
  )
}