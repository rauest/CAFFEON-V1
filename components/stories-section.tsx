import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"

const stories = [
  {
    id: 1,
    titulo: "El Arte del Café de Especialidad",
    categoria: "Origen",
    imagen: "/coffee-cupping-session-specialty-coffee-tasting-pr.jpg",
    excerpt: "Descubre qué hace que un café sea considerado de especialidad y cómo evaluamos cada lote.",
    fecha: "15 Ene 2026",
  },
  {
    id: 2,
    titulo: "Historias de Nuestros Productores",
    categoria: "Comunidad",
    imagen: "/colombian-coffee-farmer-family-smiling-mountain-fa.jpg",
    excerpt: "Conoce a las familias detrás de cada grano y su compromiso generacional con el café.",
    fecha: "10 Ene 2026",
  },
  {
    id: 3,
    titulo: "Métodos de Preparación para Alta Cocina",
    categoria: "Recetas",
    imagen: "/pour-over-coffee-preparation-elegant-cafe-barista.jpg",
    excerpt: "Guía completa para extraer lo mejor de cada origen en tu establecimiento.",
    fecha: "5 Ene 2026",
  },
  {
    id: 4,
    titulo: "Del Grano a la Taza: Nuestro Proceso",
    categoria: "Proceso",
    imagen: "/coffee-roasting-machine-artisan-roaster-dark-beans.jpg",
    excerpt: "Un viaje por cada etapa que garantiza la calidad constante de CAFFEON.",
    fecha: "28 Dic 2025",
  },
]

export default function StoriesSection() {
  return (
    <section id="stories" className="py-24 bg-blanco-menta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-dorado font-semibold tracking-wider text-sm uppercase">Blog & Novedades</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-verde-profundo mt-3 mb-4 text-balance">
            Caffeon Stories
          </h2>
          <p className="text-verde-profundo/70 text-lg max-w-2xl mx-auto text-pretty">
            Historias de origen, cultura cafetera, recetas y todo lo que necesitas saber para llevar la experiencia del
            café al siguiente nivel.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story) => (
            <Card
              key={story.id}
              className="group bg-white border-none rounded-2xl overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={story.imagen || "/placeholder.svg"}
                  alt={story.titulo}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-dorado text-white text-xs font-bold px-3 py-1 rounded-full">
                  {story.categoria}
                </div>
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-verde-profundo/50 text-xs mb-3">
                  <Calendar size={14} />
                  {story.fecha}
                </div>
                <h3 className="font-serif text-lg font-bold text-verde-profundo mb-2 line-clamp-2 group-hover:text-dorado transition-colors">
                  {story.titulo}
                </h3>
                <p className="text-verde-profundo/70 text-sm line-clamp-2 mb-4">{story.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-dorado font-semibold text-sm group-hover:gap-2 transition-all">
                  Leer más <ArrowRight size={16} />
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-verde-profundo font-semibold hover:text-dorado transition-colors group">
            Ver todas las historias
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
