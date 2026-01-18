// ===== Data =====
const slidesData = [
  {
    title: "Del Origen a la Mesa",
    subtitle: "Café de especialidad colombiano para alta cocina",
  },
  {
    title: "Calidad Constante",
    subtitle: "Trazabilidad completa desde la finca hasta tu negocio",
  },
  {
    title: "Alta Cocina",
    subtitle: "Experiencias únicas para negocios que valoran la excelencia",
  },
]

const productosData = [
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

const storiesData = [
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

const faqsData = [
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

// ===== DOM Elements =====
const header = document.getElementById("header")
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const navMobile = document.getElementById("navMobile")
const menuIcon = document.querySelector(".menu-icon")
const closeIcon = document.querySelector(".close-icon")
const heroSlides = document.querySelectorAll(".hero-slide")
const heroSubtitle = document.getElementById("heroSubtitle")
const heroDescription = document.getElementById("heroDescription")
const indicators = document.querySelectorAll(".indicator")
const heroArrowLeft = document.querySelector(".hero-arrow-left")
const heroArrowRight = document.querySelector(".hero-arrow-right")
const productosCarousel = document.getElementById("productosCarousel")
const carouselBtnLeft = document.querySelector(".carousel-btn-left")
const carouselBtnRight = document.querySelector(".carousel-btn-right")
const productModal = document.getElementById("productModal")
const modalBody = document.getElementById("modalBody")
const modalClose = document.querySelector(".modal-close")
const modalOverlay = document.querySelector(".modal-overlay")
const storiesGrid = document.getElementById("storiesGrid")
const faqAccordion = document.getElementById("faqAccordion")
const contactForm = document.getElementById("contactForm")
const newsletterForm = document.getElementById("newsletterForm")

// ===== State =====
let currentSlide = 0
let heroInterval

// ===== Header Scroll Effect =====
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// ===== Mobile Menu Toggle =====
mobileMenuBtn.addEventListener("click", () => {
  navMobile.classList.toggle("hidden")
  menuIcon.classList.toggle("hidden")
  closeIcon.classList.toggle("hidden")
})

// Close mobile menu when clicking links
navMobile.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMobile.classList.add("hidden")
    menuIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden")
  })
})

// ===== Hero Slider =====
function updateHeroSlide(index) {
  heroSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index)
  })

  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === index)
  })

  heroSubtitle.textContent = slidesData[index].title
  heroDescription.textContent = slidesData[index].subtitle
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slidesData.length
  updateHeroSlide(currentSlide)
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slidesData.length) % slidesData.length
  updateHeroSlide(currentSlide)
}

function startHeroAutoplay() {
  heroInterval = setInterval(nextSlide, 6000)
}

function resetHeroAutoplay() {
  clearInterval(heroInterval)
  startHeroAutoplay()
}

heroArrowLeft.addEventListener("click", () => {
  prevSlide()
  resetHeroAutoplay()
})

heroArrowRight.addEventListener("click", () => {
  nextSlide()
  resetHeroAutoplay()
})

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentSlide = index
    updateHeroSlide(currentSlide)
    resetHeroAutoplay()
  })
})

startHeroAutoplay()

// ===== Productos Carousel =====
function renderProductos() {
  productosCarousel.innerHTML = productosData
    .map(
      (producto) => `
    <div class="product-card" data-id="${producto.id}">
      <div class="product-image">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <span class="product-badge">${producto.perfil}</span>
      </div>
      <div class="product-content">
        <h3 class="product-name">${producto.nombre}</h3>
        <p class="product-description">${producto.descripcion}</p>
        <div class="product-tags">
          <span class="product-tag">${producto.proceso}</span>
          <span class="product-tag">${producto.altura}</span>
        </div>
        <button class="product-btn">Más Detalles</button>
      </div>
    </div>
  `,
    )
    .join("")

  // Add click events to product cards
  document.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => {
      const productId = Number.parseInt(card.dataset.id)
      openProductModal(productId)
    })
  })
}

carouselBtnLeft.addEventListener("click", () => {
  productosCarousel.scrollBy({ left: -340, behavior: "smooth" })
})

carouselBtnRight.addEventListener("click", () => {
  productosCarousel.scrollBy({ left: 340, behavior: "smooth" })
})

// ===== Product Modal =====
function openProductModal(productId) {
  const producto = productosData.find((p) => p.id === productId)
  if (!producto) return

  modalBody.innerHTML = `
    <div class="modal-header">
      <h3 class="modal-title">${producto.nombre}</h3>
      <p class="modal-subtitle">${producto.region} • ${producto.variedad}</p>
    </div>
    <div class="modal-grid">
      <div class="modal-image">
        <img src="${producto.imagen}" alt="${producto.nombre}">
      </div>
      <div class="modal-details">
        <div class="detail-item">
          <h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
              <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
              <line x1="6" x2="6" y1="2" y2="4"></line>
              <line x1="10" x2="10" y1="2" y2="4"></line>
              <line x1="14" x2="14" y1="2" y2="4"></line>
            </svg>
            Notas de Cata
          </h4>
          <p>${producto.notasCata}</p>
        </div>
        <div class="detail-item">
          <h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
            </svg>
            Proceso
          </h4>
          <p>${producto.proceso}</p>
        </div>
        <div class="detail-item">
          <h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
            </svg>
            Altura
          </h4>
          <p>${producto.altura}</p>
        </div>
        <div class="detail-item">
          <h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
            </svg>
            Preparación Recomendada
          </h4>
          <p>${producto.preparacion}</p>
        </div>
        <button class="modal-cta">Solicitar Información</button>
      </div>
    </div>
  `

  productModal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeProductModal() {
  productModal.classList.remove("active")
  document.body.style.overflow = ""
}

modalClose.addEventListener("click", closeProductModal)
modalOverlay.addEventListener("click", closeProductModal)

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && productModal.classList.contains("active")) {
    closeProductModal()
  }
})

// ===== Stories Grid =====
function renderStories() {
  storiesGrid.innerHTML = storiesData
    .map(
      (story) => `
    <article class="story-card">
      <div class="story-image">
        <img src="${story.imagen}" alt="${story.titulo}">
        <span class="story-category">${story.categoria}</span>
      </div>
      <div class="story-content">
        <div class="story-date">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
            <line x1="16" x2="16" y1="2" y2="6"></line>
            <line x1="8" x2="8" y1="2" y2="6"></line>
            <line x1="3" x2="21" y1="10" y2="10"></line>
          </svg>
          ${story.fecha}
        </div>
        <h3 class="story-title">${story.titulo}</h3>
        <p class="story-excerpt">${story.excerpt}</p>
        <span class="story-link">
          Leer más
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </span>
      </div>
    </article>
  `,
    )
    .join("")
}

// ===== FAQ Accordion =====
function renderFAQs() {
  faqAccordion.innerHTML = faqsData
    .map(
      (faq, index) => `
    <div class="accordion-item" data-index="${index}">
      <button class="accordion-header">
        ${faq.pregunta}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
      <div class="accordion-content">
        <div class="accordion-content-inner">
          ${faq.respuesta}
        </div>
      </div>
    </div>
  `,
    )
    .join("")

  // Add click events to accordion items
  document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.parentElement
      const content = item.querySelector(".accordion-content")
      const isActive = item.classList.contains("active")

      // Close all other items
      document.querySelectorAll(".accordion-item").forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active")
          otherItem.querySelector(".accordion-content").style.maxHeight = null
        }
      })

      // Toggle current item
      if (isActive) {
        item.classList.remove("active")
        content.style.maxHeight = null
      } else {
        item.classList.add("active")
        content.style.maxHeight = content.scrollHeight + "px"
      }
    })
  })
}

// ===== Contact Form =====
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const formData = new FormData(contactForm)
  const data = Object.fromEntries(formData)
  console.log("Contact form submitted:", data)
  alert("¡Gracias por tu mensaje! Te contactaremos pronto.")
  contactForm.reset()
})

// ===== Newsletter Form =====
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const email = newsletterForm.querySelector("input").value
  console.log("Newsletter subscription:", email)
  alert("¡Bienvenido al Club CAFFEON!")
  newsletterForm.reset()
})

// ===== Initialize =====
document.addEventListener("DOMContentLoaded", () => {
  renderProductos()
  renderStories()
  renderFAQs()
})
