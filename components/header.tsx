"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Productos", href: "#productos" },
  { name: "Caffeon Stories", href: "#stories" },
  { name: "Sostenibilidad", href: "#sostenibilidad" },
  { name: "Contacto", href: "#contacto" },
  { name: "FAQ", href: "#faq" },
  { name: "Club Caffeon", href: "#club" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-verde-profundo/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="font-serif text-2xl md:text-3xl font-bold text-blanco-menta tracking-wider">
              COFFE<span className="text-dorado">Ø</span>N
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-blanco-menta/90 hover:text-dorado transition-colors text-sm font-medium tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-blanco-menta hover:text-dorado hover:bg-transparent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-verde-profundo/98 backdrop-blur-md border-t border-blanco-menta/10">
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-6 py-3 text-blanco-menta/90 hover:text-dorado hover:bg-blanco-menta/5 transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
