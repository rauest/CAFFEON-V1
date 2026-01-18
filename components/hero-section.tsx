"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/colombian-coffee-plantation-mountains-sunrise-prem.jpg",
    title: "Del Origen a la Mesa",
    subtitle: "Café de especialidad colombiano para alta cocina",
  },
  {
    image: "/artisan-coffee-roasting-process-premium-beans-clos.jpg",
    title: "Calidad Constante",
    subtitle: "Trazabilidad completa desde la finca hasta tu negocio",
  },
  {
    image: "/fine-dining-coffee-service-elegant-restaurant-prem.jpg",
    title: "Alta Cocina",
    subtitle: "Experiencias únicas para negocios que valoran la excelencia",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
          <div className="absolute inset-0 bg-verde-profundo/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-blanco-menta tracking-widest">
            COFFE<span className="text-dorado">Ø</span>N
          </h1>
          <p className="text-dorado text-sm md:text-base tracking-[0.3em] mt-2 font-medium">CAFÉ DE ESPECIALIDAD</p>
        </div>

        {/* Slide Content */}
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-blanco-menta mb-4 text-balance">
            {slides[currentSlide].title}
          </h2>
          <p className="text-blanco-menta/90 text-lg md:text-xl mb-8 text-pretty">{slides[currentSlide].subtitle}</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-dorado hover:bg-dorado/90 text-white font-semibold px-8 py-6 text-lg" asChild>
            <a href="#productos">Ver Productos</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-blanco-menta text-blanco-menta hover:bg-blanco-menta hover:text-verde-profundo font-semibold px-8 py-6 text-lg bg-transparent"
            asChild
          >
            <a href="#origen">Conoce Nuestra Historia</a>
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-dorado w-8" : "bg-blanco-menta/50 hover:bg-blanco-menta/70"
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-2 text-blanco-menta/70 hover:text-dorado transition-colors"
          aria-label="Slide anterior"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-2 text-blanco-menta/70 hover:text-dorado transition-colors"
          aria-label="Siguiente slide"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blanco-menta/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-blanco-menta/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}
