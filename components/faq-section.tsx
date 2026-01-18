import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    pregunta: "¿Cuáles son los métodos de pago aceptados?",
    respuesta:
      "Aceptamos transferencias bancarias, tarjetas de crédito/débito y pagos contra entrega para pedidos B2B. Para clientes recurrentes, ofrecemos condiciones de pago personalizadas.",
  },
  {
    pregunta: "¿Cuál es el pedido mínimo para negocios?",
    respuesta:
      "El pedido mínimo es de 5kg por referencia. Ofrecemos descuentos progresivos a partir de 25kg y condiciones especiales para pedidos recurrentes mensuales.",
  },
  {
    pregunta: "¿Cómo funciona el envío?",
    respuesta:
      "Realizamos envíos a nivel nacional en Colombia con tiempos de entrega de 2-5 días hábiles. Para envíos internacionales, trabajamos con operadores logísticos especializados.",
  },
  {
    pregunta: "¿Qué garantía tienen los productos?",
    respuesta:
      "Garantizamos la frescura de nuestro café: todos los lotes se tuestan bajo pedido y tienen una fecha de tueste no mayor a 15 días. Si no estás satisfecho, te devolvemos el dinero.",
  },
  {
    pregunta: "¿Ofrecen capacitación para baristas?",
    respuesta:
      "Sí, ofrecemos sesiones de capacitación gratuitas para nuestros clientes B2B. Incluimos formación en extracción, perfiles de sabor y técnicas de preparación específicas para cada origen.",
  },
  {
    pregunta: "¿Puedo solicitar muestras antes de hacer un pedido grande?",
    respuesta:
      "¡Por supuesto! Enviamos kits de muestra con nuestros principales orígenes para que puedas evaluar la calidad antes de comprometerte. Contáctanos para coordinar.",
  },
  {
    pregunta: "¿Tienen política de devoluciones?",
    respuesta:
      "Aceptamos devoluciones dentro de los primeros 7 días si el producto presenta algún defecto o no cumple con las especificaciones acordadas. Tu satisfacción es nuestra prioridad.",
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-blanco-menta">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-dorado font-semibold tracking-wider text-sm uppercase">Servicio al Cliente</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-verde-profundo mt-3 mb-4 text-balance">
            Preguntas Frecuentes
          </h2>
          <p className="text-verde-profundo/70 text-lg text-pretty">
            Resolvemos tus dudas sobre pagos, envíos, devoluciones y más.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-xl border-none shadow-sm px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-verde-profundo hover:text-dorado hover:no-underline py-5">
                {faq.pregunta}
              </AccordionTrigger>
              <AccordionContent className="text-verde-profundo/80 pb-5 leading-relaxed">
                {faq.respuesta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <p className="text-verde-profundo/70 mb-4">¿No encuentras lo que buscas?</p>
          <a href="#contacto" className="inline-flex items-center gap-2 text-dorado font-semibold hover:underline">
            Contáctanos directamente
          </a>
        </div>
      </div>
    </section>
  )
}
