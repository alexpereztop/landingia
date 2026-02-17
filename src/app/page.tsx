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
import ContactFormModal from "@/components/forms/ContactFormModal"
import ThankYouModal from "@/components/forms/ThankYouModal"
import { useFormModal } from "@/hooks/useFormModal"

export default function AICourseLanding() {
  const {
    isContactFormOpen,
    isThankYouOpen,
    openContactForm,
    closeContactForm,
    openThankYou,
    closeThankYou
  } = useFormModal()

  return (
    <div className="min-h-screen bg-background w-full">
      {/* Navegación Flotante */}
      <FloatingNavigation />

      {/* Hero Section con Estadísticas Flotantes */}
      <HeroSection onOpenContactForm={openContactForm} />

      {/* Diferenciadores */}
      <DiferenciadoresSection />

      {/* CTA Intermedio WhatsApp */}
      <WhatsAppCTA />

      {/* Perfiles */}
      <PerfilesSection />

      {/* Programa */}
      <ProgramaSection onOpenContactForm={openContactForm} />

      {/* Profesores */}
      <ProfesoresSection />

      {/* FAQ */}
      <FAQSection />

      {/* CTA Final */}
      <CTAFinalSection onOpenContactForm={openContactForm} />

      {/* Footer */}
      <FooterSection />

      {/* Modales de formulario */}
      <ContactFormModal
        isOpen={isContactFormOpen}
        onClose={closeContactForm}
        onSuccess={openThankYou}
      />
      <ThankYouModal
        isOpen={isThankYouOpen}
        onClose={closeThankYou}
      />
    </div>
  )
}
