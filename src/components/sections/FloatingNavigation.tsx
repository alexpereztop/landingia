"use client"

import { useState, useEffect, useCallback, memo } from "react"
import { Button } from "@/components/ui/button"
import { Navigation, ArrowRight, ChevronUp } from "lucide-react"

// Constants - Moved outside component for better performance
const WHATSAPP_URL = "https://wa.me/523317876251?text=Vi%20tu%20anuncio%20en%20Google.%20%C2%BFMe%20das%20informaci%C3%B3n%20del%20curso%20de%20IA?%20"
const WHATSAPP_COLOR = "#25d366"
const SCROLL_TOP_COLOR = "#F29F0E"
const NAV_COLOR = "#6a6ae2"
const SCROLL_THRESHOLD = 300

// Types
interface FloatingNavigationProps {
  readonly className?: string
}

interface NavigationItem {
  readonly id: string
  readonly label: string
  readonly sectionId: string
}

// Navigation items data
const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  { id: "nav-hero", label: "Inicio", sectionId: "hero" },
  { id: "nav-diferenciadores", label: "¿Por qué nosotros?", sectionId: "diferenciadores" },
  { id: "nav-perfiles", label: "Perfiles", sectionId: "perfiles" },
  { id: "nav-programa", label: "Programa", sectionId: "programa" },
  { id: "nav-profesores", label: "Profesores", sectionId: "profesores" },
  { id: "nav-faq", label: "FAQ", sectionId: "faq" }
] as const

// Utility functions
const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// Memoized Components
const WhatsAppIcon = memo(function WhatsAppIcon({ 
  className 
}: { 
  className?: string 
}) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
    </svg>
  )
})

const NavigationMenuItem = memo(function NavigationMenuItem({ 
  item, 
  onNavigate 
}: { 
  item: NavigationItem
  onNavigate: (sectionId: string) => void 
}) {
  const handleClick = useCallback(() => {
    onNavigate(item.sectionId)
  }, [item.sectionId, onNavigate])

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-between w-full text-left px-4 py-3 text-sm font-medium hover:bg-muted rounded-lg transition-all duration-200 group focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label={`Navegar a la sección ${item.label}`}
    >
      <span className="group-hover:text-primary transition-colors duration-200">
        {item.label}
      </span>
      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
    </button>
  )
})

const NavigationMenu = memo(function NavigationMenu({ 
  isOpen, 
  onNavigate 
}: { 
  isOpen: boolean
  onNavigate: (sectionId: string) => void 
}) {
  if (!isOpen) return null

  return (
    <div 
      className="absolute top-16 right-0 bg-background/98 backdrop-blur-sm border-2 rounded-xl shadow-2xl p-2 min-w-[220px] z-[10002] transition-all duration-300 ease-out transform opacity-100 scale-100 astro-border-gradient"
      role="menu"
      aria-label="Menú de navegación principal"
    >
      <nav className="space-y-1" role="none">
        {NAVIGATION_ITEMS.map((item) => (
          <NavigationMenuItem
            key={item.id}
            item={item}
            onNavigate={onNavigate}
          />
        ))}
        
        <div className="border-t pt-2 mt-2 border-primary/20">
          <a 
            href={WHATSAPP_URL}
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
            aria-label="Inscribirse al curso por WhatsApp"
          >
            <Button 
              size="sm" 
              className="w-full rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 group astro-button-primary" 
              style={{ backgroundColor: WHATSAPP_COLOR, borderColor: WHATSAPP_COLOR }}
            >
              <WhatsAppIcon className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-200" />
              Inscríbete Ahora
            </Button>
          </a>
        </div>
      </nav>
    </div>
  )
})

const NavigationButton = memo(function NavigationButton({ 
  isOpen, 
  onClick 
}: { 
  isOpen: boolean
  onClick: () => void 
}) {
  return (
    <Button
      onClick={onClick}
      size="icon"
      variant="outline"
      className="rounded-full w-12 h-12 bg-background/95 hover:bg-primary/90 shadow-lg backdrop-blur-sm border-2 transition-all duration-300 hover:scale-110 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 group"
      style={{ backgroundColor: NAV_COLOR, borderColor: NAV_COLOR }}
      aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
      aria-expanded={isOpen}
      aria-haspopup="menu"
    >
      <Navigation className={`w-5 h-5 text-white transition-transform duration-200 ${isOpen ? 'rotate-90' : 'group-hover:rotate-12'}`} />
    </Button>
  )
})

const ScrollToTopButton = memo(function ScrollToTopButton({ 
  show 
}: { 
  show: boolean 
}) {
  if (!show) return null

  return (
    <div className="fixed bottom-6 right-6 z-[10000]">
      <Button
        onClick={scrollToTop}
        size="icon"
        className="rounded-full w-12 h-12 shadow-lg backdrop-blur-sm border-2 transition-all duration-300 hover:scale-110 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 group astro-button-secondary"
        style={{ backgroundColor: SCROLL_TOP_COLOR, borderColor: SCROLL_TOP_COLOR }}
        aria-label="Volver al inicio de la página"
      >
        <ChevronUp className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" />
      </Button>
    </div>
  )
})

export default function FloatingNavigation({ className }: FloatingNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Optimized scroll handler with useCallback
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY
    setShowScrollTop(scrollY > SCROLL_THRESHOLD)
  }, [])

  // Optimized navigation handler
  const handleNavigate = useCallback((sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }, [])

  // Optimized menu toggle
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  // Effect for scroll listener with cleanup
  useEffect(() => {
    // Throttled scroll handler for better performance
    let ticking = false
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScrollHandler, { passive: true })
    return () => window.removeEventListener('scroll', throttledScrollHandler)
  }, [handleScroll])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isMenuOpen])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMenuOpen && !target.closest('[data-floating-nav]')) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Navigation Menu */}
      <div 
        className={`fixed top-6 right-6 z-[10001] flex flex-col gap-3 ${className || ''}`}
        data-floating-nav
        role="navigation"
        aria-label="Navegación flotante"
      >
        <div className="relative">
          <NavigationButton 
            isOpen={isMenuOpen} 
            onClick={toggleMenu} 
          />
          <NavigationMenu 
            isOpen={isMenuOpen} 
            onNavigate={handleNavigate} 
          />
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTopButton show={showScrollTop} />
    </>
  )
}
