import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ProductCarouselProps {
  banners: {
    id: number
    image: string
    url: string
  }[]
}

export default function ProductCarousel({ banners }: ProductCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-md">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="min-w-full">
            <Link to={banner.url}>
              <div className="relative w-full h-[150px] md:h-[300px]">
                <img src={banner.image || "/vite.svg"} alt="Banner" className="absolute inset-0 w-full h-full object-contain" />
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-none h-16 w-8 md:h-24 md:w-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-none h-16 w-8 md:h-24 md:w-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 rounded-full transition-all ${
              currentSlide === index ? "w-6 bg-white" : "w-1.5 bg-white/60"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

