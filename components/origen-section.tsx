import Image from "next/image"

export default function OrigenSection() {
  return (
    <section id="origen" className="py-24 bg-blanco-menta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="text-dorado font-semibold tracking-wider text-sm uppercase">Nuestra Historia</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-verde-profundo mt-3 mb-6 text-balance">
              El Origen de Caffeon
            </h2>
            <div className="space-y-4 text-verde-profundo/80 text-lg leading-relaxed">
              <p>
                En las montañas colombianas, donde las nubes abrazan los cafetales y el sol acaricia cada grano, nace{" "}
                <strong className="text-verde-profundo">CAFFEON</strong>. Somos el puente entre las manos expertas de
                nuestros productores y las mesas más exigentes del mundo.
              </p>
              <p>
                Cada taza cuenta una historia: la del campesino que madruga para cuidar sus plantas, la del proceso
                artesanal que respeta los tiempos de la naturaleza, y la del compromiso inquebrantable con la calidad
                que nos define.
              </p>
              <p>
                No somos una marca más de café. Somos un viaje sensorial que conecta el
                <span className="text-dorado font-semibold"> origen colombiano</span> con la excelencia culinaria,
                llevando la esencia de nuestras fincas directamente a tu negocio.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-dorado">+50</span>
                <span className="text-sm text-verde-profundo/70">Fincas Aliadas</span>
              </div>
              <div className="w-px h-12 bg-verde-profundo/20" />
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-dorado">100%</span>
                <span className="text-sm text-verde-profundo/70">Trazabilidad</span>
              </div>
              <div className="w-px h-12 bg-verde-profundo/20" />
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-dorado">+85</span>
                <span className="text-sm text-verde-profundo/70">Puntos SCA</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/colombian-coffee-farmer-picking-ripe-coffee-cherri.jpg"
                alt="Caficultor colombiano recolectando café"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-dorado/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-verde-profundo/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
