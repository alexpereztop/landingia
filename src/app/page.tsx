"use client"

import FloatingNavigation from "@/components/sections/FloatingNavigation"
import HeroSection from "@/components/sections/HeroSection"
import WhatsAppCTA from "@/components/sections/WhatsAppCTA"
import DiferenciadoresSection from "@/components/sections/DiferenciadoresSection"
import PerfilesSection from "@/components/sections/PerfilesSection"
import ProgramaSection from "@/components/sections/ProgramaSection"
import ProfesoresSection from "@/components/sections/ProfesoresSection"
import FAQSection from "@/components/sections/FAQSection"
import CTAFinalSection from "@/components/sections/CTAFinalSection"
import FooterSection from "@/components/sections/FooterSection"

export default function AICourseLanding() {
  return (
    <div className="min-h-screen bg-background w-full">
      {/* Navegación Flotante */}
      <FloatingNavigation />

      {/* Hero Section con Estadísticas Flotantes */}
      <HeroSection />

      {/* Diferenciadores */}
      <DiferenciadoresSection />

      {/* CTA Intermedio WhatsApp */}
      <WhatsAppCTA />

      {/* Perfiles */}
      <PerfilesSection />

      {/* Programa */}
      <ProgramaSection />

      {/* Profesores */}
      <ProfesoresSection />

      {/* FAQ */}
      <FAQSection />

      {/* CTA Final */}
      <CTAFinalSection />

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
