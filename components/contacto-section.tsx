"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react"

export default function ContactoSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    tipoNegocio: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.")
  }

  return (
    <section id="contacto" className="py-24 bg-verde-profundo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-dorado font-semibold tracking-wider text-sm uppercase">Hablemos</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-blanco-menta mt-3 mb-6 text-balance">
              Contacto
            </h2>
            <p className="text-blanco-menta/80 text-lg mb-8 leading-relaxed">
              ¿Listo para llevar el mejor café colombiano a tu negocio? Cuéntanos sobre tu proyecto y empecemos una
              relación profesional basada en la excelencia y la calidad.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-dorado/20 rounded-xl flex items-center justify-center">
                  <Mail className="text-dorado" size={20} />
                </div>
                <div>
                  <p className="text-blanco-menta/60 text-sm">Email</p>
                  <a
                    href="mailto:hola@caffeon.es.com"
                    className="text-blanco-menta hover:text-dorado transition-colors"
                  >
                    hola@caffeon.es.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-dorado/20 rounded-xl flex items-center justify-center">
                  <Phone className="text-dorado" size={20} />
                </div>
                <div>
                  <p className="text-blanco-menta/60 text-sm">Teléfono</p>
                  <a href="tel:+573001234567" className="text-blanco-menta hover:text-dorado transition-colors">
                    +57 300 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-dorado/20 rounded-xl flex items-center justify-center">
                  <MapPin className="text-dorado" size={20} />
                </div>
                <div>
                  <p className="text-blanco-menta/60 text-sm">Ubicación</p>
                  <p className="text-blanco-menta">Bogotá, Colombia</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-10">
              <p className="text-blanco-menta/60 text-sm mb-4">Síguenos</p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/caffeon_oficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blanco-menta/10 rounded-xl flex items-center justify-center text-blanco-menta hover:bg-dorado hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://linkedin.com/company/caffeon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blanco-menta/10 rounded-xl flex items-center justify-center text-blanco-menta hover:bg-dorado hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-blanco-menta rounded-2xl p-8 md:p-10">
            <h3 className="font-serif text-2xl font-bold text-verde-profundo mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="nombre" className="text-verde-profundo font-medium">
                  Nombre completo
                </Label>
                <Input
                  id="nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="mt-2 border-verde-profundo/20 focus:border-dorado focus:ring-dorado"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-verde-profundo font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2 border-verde-profundo/20 focus:border-dorado focus:ring-dorado"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="tipoNegocio" className="text-verde-profundo font-medium">
                  Tipo de negocio
                </Label>
                <Select
                  value={formData.tipoNegocio}
                  onValueChange={(value) => setFormData({ ...formData, tipoNegocio: value })}
                >
                  <SelectTrigger className="mt-2 border-verde-profundo/20 focus:border-dorado focus:ring-dorado">
                    <SelectValue placeholder="Selecciona tu tipo de negocio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="restaurante">Restaurante</SelectItem>
                    <SelectItem value="cafeteria">Cafetería</SelectItem>
                    <SelectItem value="hotel">Hotel</SelectItem>
                    <SelectItem value="catering">Catering</SelectItem>
                    <SelectItem value="distribuidor">Distribuidor</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="mensaje" className="text-verde-profundo font-medium">
                  Mensaje
                </Label>
                <Textarea
                  id="mensaje"
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="mt-2 border-verde-profundo/20 focus:border-dorado focus:ring-dorado min-h-[120px]"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-verde-profundo hover:bg-verde-profundo/90 text-blanco-menta py-6 text-lg font-semibold"
              >
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
