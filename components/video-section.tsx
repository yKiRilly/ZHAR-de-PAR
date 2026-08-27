
'use client'

import { useEffect, useRef, useState } from 'react'

export function VideoSection() {
  const [progress, setProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  // ==========================================
  // SCROLL ZOOM EFFECT
  // ==========================================
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('video-section')

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

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // ==========================================
  // AUTOPLAY WHEN VIDEO ENTERS SCREEN
  // ==========================================
  useEffect(() => {
    const video = videoRef.current
    const section = document.getElementById('video-section')

    if (!video || !section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Начинаем видео сначала
          video.currentTime = 0

          video.play().catch(() => {
            // Браузер может заблокировать autoplay
          })
        } else {
          // Когда ушли от видео — останавливаем
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

  // ==========================================
  // ZOOM
  // ==========================================
  const scale = 0.82 + progress * 0.18

  return (
    <section
      id="video-section"
      className="
        w-full
        overflow-hidden
        py-12
        sm:py-16
        md:py-24
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <video
          ref={videoRef}
          className="
            h-[360px]
            w-full
            rounded-xl
            object-cover
            sm:h-[450px]
            sm:rounded-2xl
            md:h-[550px]
            lg:h-[650px]
          "
          src="/video/videobanya.mp4"

          // Превью до запуска видео
          poster="/photos/view/viewgeneral.PNG"

          // Видео без звука для autoplay
          muted
          playsInline

          // Управление пользователю не показываем
          controls={false}

          // Загружаем метаданные, а не весь файл сразу
          preload="metadata"

          // Дополнительные параметры для браузеров
          autoPlay={false}
          loop={false}

          // Zoom animation
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
          }}
        >
          <source
            src="/video/videobanya.mp4"
            type="video/mp4"
          />

          Ваш браузер не поддерживает воспроизведение видео.
        </video>
      </div>
    </section>
  )
}
