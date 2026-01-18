import { Coffee } from "lucide-react"

const footerLinks = {
  empresa: [
    { name: "Nuestra Historia", href: "#origen" },
    { name: "Sostenibilidad", href: "#sostenibilidad" },
    { name: "Caffeon Stories", href: "#stories" },
  ],
  productos: [
    { name: "Catálogo", href: "#productos" },
    { name: "Club Caffeon", href: "#club" },
    { name: "Para Negocios", href: "#contacto" },
  ],
  soporte: [
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
    { name: "Servicio al Cliente", href: "#faq" },
  ],
  legal: [
    { name: "Política de Privacidad", href: "#" },
    { name: "Términos y Condiciones", href: "#" },
    { name: "Política de Reembolsos", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-verde-profundo pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-flex items-center gap-2 mb-4">
              <span className="font-serif text-3xl font-bold text-blanco-menta tracking-wider">
                COFFE<span className="text-dorado">Ø</span>N
              </span>
            </a>
            <p className="text-blanco-menta/70 leading-relaxed mb-6 max-w-sm">
              Café de especialidad colombiano para alta cocina. Conectamos las mejores fincas cafeteras con los negocios
              más exigentes, garantizando calidad, trazabilidad y sostenibilidad en cada taza.
            </p>
            <div className="flex items-center gap-2 text-dorado">
              <Coffee size={20} />
              <span className="text-sm font-medium">@caffeon_oficial</span>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-blanco-menta mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-blanco-menta/70 hover:text-dorado transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-blanco-menta mb-4">Productos</h4>
            <ul className="space-y-3">
              {footerLinks.productos.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-blanco-menta/70 hover:text-dorado transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-blanco-menta mb-4">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-blanco-menta/70 hover:text-dorado transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blanco-menta/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blanco-menta/50 text-sm">© 2026 CAFFEON. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-blanco-menta/50 hover:text-dorado transition-colors text-xs"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
