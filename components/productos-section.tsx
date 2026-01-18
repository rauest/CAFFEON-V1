"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Mountain, Droplets, Coffee, ThermometerSun } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const productos = [
  {
    id: 1,
    nombre: "Sierra Nevada",
    imagen: "/premium-coffee-beans-bag-dark-roast-elegant-packag.jpg",
    descripcion: "Notas de chocolate negro, nuez y caramelo con un final prolongado.",
    proceso: "Lavado",
    altura: "1.600 - 1.900 msnm",
    variedad: "Castillo, Caturra",
    region: "Sierra Nevada de Santa Marta",
    notasCata: "Chocolate negro intenso, nueces tostadas, caramelo suave. Cuerpo medio-alto con acidez balanceada.",
    preparacion: "Ideal para espresso y métodos de filtrado. Molido medio para V60, fino para espresso.",
    perfil: "Intenso",
  },
  {
    id: 2,
    nombre: "Huila Reserva",
    imagen: "/specialty-coffee-bag-medium-roast-premium-colombia.jpg",
    descripcion: "Frutas rojas vibrantes con acidez brillante y cuerpo sedoso.",
    proceso: "Honey",
    altura: "1.700 - 2.000 msnm",
    variedad: "Geisha, Bourbon",
    region: "Huila",
    notasCata: "Frutos rojos, cereza madura, miel floral. Acidez cítrica brillante con dulzor natural.",
    preparacion: "Excelente en métodos de filtrado como Chemex y AeroPress. Molido medio-grueso.",
    perfil: "Afrutado",
  },
  {
    id: 3,
    nombre: "Nariño Sublime",
    imagen: "/artisan-coffee-beans-bag-light-roast-colombian-spe.jpg",
    descripcion: "Cítricos delicados con notas florales y un final limpio.",
    proceso: "Natural",
    altura: "1.800 - 2.200 msnm",
    variedad: "Típica, Colombia",
    region: "Nariño",
    notasCata: "Naranja, jazmín, bergamota. Acidez vibrante con cuerpo ligero y final floral.",
    preparacion: "Perfecto para cold brew y métodos de inmersión. Resalta notas en French Press.",
    perfil: "Floral",
  },
  {
    id: 4,
    nombre: "Antioquia Tradición",
    imagen: "/colombian-coffee-beans-traditional-roast-elegant-p.jpg",
    descripcion: "Perfil clásico colombiano con balance perfecto y versatilidad.",
    proceso: "Lavado",
    altura: "1.500 - 1.800 msnm",
    variedad: "Caturra, Castillo",
    region: "Antioquia",
    notasCata: "Panela, almendras, cacao suave. Balance excepcional con acidez media y cuerpo redondo.",
    preparacion: "Versátil para cualquier método. Ideal para cafeterías de alta rotación.",
    perfil: "Balanceado",
  },
  {
    id: 5,
    nombre: "Tolima Microlote",
    imagen: "/micro-lot-specialty-coffee-premium-single-origin-b.jpg",
    descripcion: "Edición limitada con complejidad aromática excepcional.",
    proceso: "Anaeróbico",
    altura: "1.900 - 2.100 msnm",
    variedad: "Geisha",
    region: "Tolima",
    notasCata: "Maracuyá, melocotón, flores tropicales. Acidez jugosa con fermentación controlada única.",
    preparacion: "Recomendado para métodos de filtrado lentos. Destacar en degustaciones especiales.",
    perfil: "Exótico",
  },
]

export default function ProductosSection() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof productos)[0] | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 340
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="productos" className="py-24 bg-verde-profundo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-dorado font-semibold tracking-wider text-sm uppercase">Nuestra Selección</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-blanco-menta mt-3 mb-4 text-balance">
            Café Alta Cocina
          </h2>
          <p className="text-blanco-menta/80 text-lg max-w-2xl mx-auto text-pretty">
            Cada origen cuenta una historia única. Descubre nuestra selección de cafés de especialidad, cuidadosamente
            seleccionados para los paladares más exigentes.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 bg-dorado text-white rounded-full shadow-lg hover:bg-dorado/90 transition-colors hidden md:block"
            aria-label="Ver productos anteriores"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {productos.map((producto) => (
              <Card
                key={producto.id}
                className="flex-shrink-0 w-[300px] bg-blanco-menta border-none rounded-2xl overflow-hidden snap-center group cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setSelectedProduct(producto)}
              >
                <div className="relative h-[280px] overflow-hidden">
                  <Image
                    src={producto.imagen || "/placeholder.svg"}
                    alt={producto.nombre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-dorado text-white text-xs font-bold px-3 py-1 rounded-full">
                    {producto.perfil}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-verde-profundo mb-2">{producto.nombre}</h3>
                  <p className="text-verde-profundo/70 text-sm mb-4 line-clamp-2">{producto.descripcion}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-verde-profundo/10 text-verde-profundo px-2 py-1 rounded">
                      {producto.proceso}
                    </span>
                    <span className="text-xs bg-verde-profundo/10 text-verde-profundo px-2 py-1 rounded">
                      {producto.altura}
                    </span>
                  </div>
                  <Button
                    className="w-full bg-verde-profundo hover:bg-verde-profundo/90 text-blanco-menta"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProduct(producto)
                    }}
                  >
                    Más Detalles
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 bg-dorado text-white rounded-full shadow-lg hover:bg-dorado/90 transition-colors hidden md:block"
            aria-label="Ver más productos"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl bg-blanco-menta border-none">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-3xl text-verde-profundo">{selectedProduct.nombre}</DialogTitle>
                <DialogDescription className="text-verde-profundo/70">
                  {selectedProduct.region} • {selectedProduct.variedad}
                </DialogDescription>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                  <Image
                    src={selectedProduct.imagen || "/placeholder.svg"}
                    alt={selectedProduct.nombre}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-verde-profundo flex items-center gap-2 mb-2">
                      <Coffee size={18} className="text-dorado" />
                      Notas de Cata
                    </h4>
                    <p className="text-verde-profundo/80 text-sm">{selectedProduct.notasCata}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-verde-profundo flex items-center gap-2 mb-2">
                      <Droplets size={18} className="text-dorado" />
                      Proceso
                    </h4>
                    <p className="text-verde-profundo/80 text-sm">{selectedProduct.proceso}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-verde-profundo flex items-center gap-2 mb-2">
                      <Mountain size={18} className="text-dorado" />
                      Altura
                    </h4>
                    <p className="text-verde-profundo/80 text-sm">{selectedProduct.altura}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-verde-profundo flex items-center gap-2 mb-2">
                      <ThermometerSun size={18} className="text-dorado" />
                      Preparación Recomendada
                    </h4>
                    <p className="text-verde-profundo/80 text-sm">{selectedProduct.preparacion}</p>
                  </div>
                  <Button className="w-full bg-dorado hover:bg-dorado/90 text-white mt-4">Solicitar Información</Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
