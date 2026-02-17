"use client"

import { useState, useCallback } from "react"

interface UseFormModalReturn {
  isContactFormOpen: boolean
  isThankYouOpen: boolean
  openContactForm: () => void
  closeContactForm: () => void
  openThankYou: () => void
  closeThankYou: () => void
  closeAll: () => void
}

export function useFormModal(): UseFormModalReturn {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [isThankYouOpen, setIsThankYouOpen] = useState(false)

  const openContactForm = useCallback(() => {
    setIsContactFormOpen(true)
    setIsThankYouOpen(false)
  }, [])

  const closeContactForm = useCallback(() => {
    setIsContactFormOpen(false)
  }, [])

  const openThankYou = useCallback(() => {
    setIsContactFormOpen(false)
    setIsThankYouOpen(true)
  }, [])

  const closeThankYou = useCallback(() => {
    setIsThankYouOpen(false)
  }, [])

  const closeAll = useCallback(() => {
    setIsContactFormOpen(false)
    setIsThankYouOpen(false)
  }, [])

  return {
    isContactFormOpen,
    isThankYouOpen,
    openContactForm,
    closeContactForm,
    openThankYou,
    closeThankYou,
    closeAll
  }
}
