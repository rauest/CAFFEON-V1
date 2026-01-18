"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Coffee, Gift, Sparkles, Mail } from "lucide-react"

export default function ClubSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter subscription:", email)
    alert("¡Bienvenido al Club CAFFEON!")
    setEmail("")
  }

  return (
    <section id="club" className="py-24 bg-cafe-oscuro relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-dorado/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-verde-profundo/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-dorado/20 rounded-full mb-8">
            <Coffee size={40} className="text-dorado" />
          </div>

          <span className="text-dorado font-semibold tracking-wider text-sm uppercase">Únete a Nosotros</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-blanco-menta mt-3 mb-6 text-balance">
            Club Caffeon
          </h2>
          <p className="text-blanco-menta/80 text-lg max-w-2xl mx-auto mb-8 text-pretty">
            Sé el primero en conocer nuevos orígenes, ofertas exclusivas para negocios, historias de nuestros
            productores y experiencias únicas del mundo del café.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-blanco-menta/70">
              <Gift size={20} className="text-dorado" />
              <span className="text-sm">Ofertas Exclusivas</span>
            </div>
            <div className="flex items-center gap-2 text-blanco-menta/70">
              <Sparkles size={20} className="text-dorado" />
              <span className="text-sm">Novedades Anticipadas</span>
            </div>
            <div className="flex items-center gap-2 text-blanco-menta/70">
              <Mail size={20} className="text-dorado" />
              <span className="text-sm">Contenido Premium</span>
            </div>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="flex-1 bg-blanco-menta/10 border-blanco-menta/20 text-blanco-menta placeholder:text-blanco-menta/50 focus:border-dorado focus:ring-dorado py-6"
              required
            />
            <Button type="submit" className="bg-dorado hover:bg-dorado/90 text-white font-semibold px-8 py-6">
              Suscribirse
            </Button>
          </form>

          <p className="text-blanco-menta/50 text-xs mt-4">
            Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  )
}
