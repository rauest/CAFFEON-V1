import { Users, Leaf, Handshake } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const pilares = [
  {
    icon: Users,
    titulo: "Impacto Social",
    descripcion:
      "Trabajamos directamente con más de 50 familias cafeteras, garantizando precios justos que superan el mercado convencional. Invertimos en educación y desarrollo comunitario.",
  },
  {
    icon: Leaf,
    titulo: "Compromiso Ambiental",
    descripcion:
      "Nuestras fincas aliadas practican agricultura regenerativa, protegen las fuentes hídricas y mantienen la biodiversidad. Compensamos nuestra huella de carbono.",
  },
  {
    icon: Handshake,
    titulo: "Relación con Productores",
    descripcion:
      "Relaciones de largo plazo basadas en confianza y transparencia. Compartimos conocimiento técnico y apoyamos la mejora continua de la calidad.",
  },
]

export default function SostenibilidadSection() {
  return (
    <section id="sostenibilidad" className="py-24 bg-verde-profundo relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image src="/aerial-view-colombian-coffee-plantation-sustainabl.jpg" alt="" fill className="object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-dorado font-semibold tracking-wider text-sm uppercase">Nuestro Compromiso</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-blanco-menta mt-3 mb-4 text-balance">
            Sostenibilidad
          </h2>
          <p className="text-blanco-menta/80 text-lg max-w-2xl mx-auto text-pretty">
            Creemos que el mejor café nace del respeto: a la tierra, a las personas y a las tradiciones. Nuestra
            sostenibilidad es integral y verificable.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pilares.map((pilar, index) => (
            <Card
              key={index}
              className="bg-blanco-menta/10 backdrop-blur-sm border-blanco-menta/20 rounded-2xl hover:bg-blanco-menta/15 transition-colors group"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-dorado/20 rounded-2xl mb-6 group-hover:bg-dorado/30 transition-colors">
                  <pilar.icon size={32} className="text-dorado" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-blanco-menta mb-4">{pilar.titulo}</h3>
                <p className="text-blanco-menta/80 leading-relaxed">{pilar.descripcion}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "100%", label: "Comercio Justo" },
            { value: "50+", label: "Familias Beneficiadas" },
            { value: "0", label: "Huella de Carbono Neta" },
            { value: "15", label: "Años de Relaciones" },
          ].map((stat, index) => (
            <div key={index}>
              <span className="block font-serif text-4xl md:text-5xl font-bold text-dorado">{stat.value}</span>
              <span className="text-blanco-menta/70 text-sm mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
