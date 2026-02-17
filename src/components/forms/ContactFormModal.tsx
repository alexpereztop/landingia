"use client"

import { useState, useCallback, useEffect } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Download, X, AlertCircle, Loader2 } from "lucide-react"
import { memo } from "react"
import { cn } from "@/lib/utils"

const WEBHOOK_API = "/api/webhook"
const INPUT_STYLE = "border-white/30 bg-white text-gray-900 placeholder:text-gray-500 focus-visible:ring-[#F29F0E]/50"
const LABEL_STYLE = "text-white"

const ESTADOS_MEXICO = [
  "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas",
  "Chihuahua", "Ciudad de México", "Coahuila", "Colima", "Durango", "Estado de México",
  "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit",
  "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí",
  "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
] as const

interface FormData {
  firstName: string
  lastName: string
  whatsapp: string
  email: string
  state: string
  acceptsContact: boolean
}

type FormErrors = Partial<Record<keyof FormData, string>>

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  whatsapp: "",
  email: "",
  state: "",
  acceptsContact: false
}

function formatWhatsApp(v: string) {
  return v.replace(/\D/g, "").slice(0, 10)
}

function validate(d: FormData): FormErrors {
  const e: FormErrors = {}
  if (d.firstName.trim().length < 2) e.firstName = "Mín. 2 caracteres"
  if (d.lastName.trim().length < 2) e.lastName = "Mín. 2 caracteres"
  if (formatWhatsApp(d.whatsapp).length !== 10) e.whatsapp = "10 dígitos"
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim())) e.email = "Correo válido"
  if (!d.state) e.state = "Selecciona estado"
  if (!d.acceptsContact) e.acceptsContact = "Debes aceptar"
  return e
}

function FormField({
  id,
  label,
  error,
  children
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className={LABEL_STYLE}>{label}</Label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-sm text-red-400">
          <AlertCircle className="w-3 h-3" />
          {error}
        </p>
      )}
    </div>
  )
}

const ContactFormModal = memo(function ContactFormModal({ isOpen, onClose, onSuccess }: ContactFormModalProps) {
  const [form, setForm] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const update = useCallback((k: keyof FormData, v: string | boolean) => {
    setForm((p) => ({ ...p, [k]: v }))
    setErrors((e) => ({ ...e, [k]: undefined }))
    setSubmitError(null)
  }, [])

  const reset = useCallback(() => {
    setForm(initialForm)
    setErrors({})
    setSubmitError(null)
  }, [])

  const submit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      const e2 = validate(form)
      if (Object.keys(e2).length) {
        setErrors(e2)
        return
      }

      setSubmitting(true)
      setSubmitError(null)
      const payload = {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        whatsapp: `+52${formatWhatsApp(form.whatsapp)}`,
        email: form.email.trim(),
        state: form.state,
        acceptsContact: form.acceptsContact,
        source: "Landing Page - Top Learning IA Diplomado",
        timestamp: new Date().toISOString()
      }

      try {
        const params = new URLSearchParams(payload as unknown as Record<string, string>)
        const res = await fetch(`${WEBHOOK_API}?${params.toString()}`, { method: "GET" })
        if (!res.ok) throw new Error()
        onSuccess()
      } catch {
        setSubmitError("Error al enviar. Intenta de nuevo.")
      } finally {
        setSubmitting(false)
      }
    },
    [form, onSuccess]
  )

  const close = useCallback(() => {
    if (!submitting) {
      reset()
      onClose()
    }
  }, [submitting, onClose, reset])

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget && !submitting) close()
    },
    [submitting, close]
  )

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !submitting) close()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, submitting, close])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[10003] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-form-title"
      onClick={handleBackdropClick}
    >
      <Card
        className="astro-card astro-border-gradient w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b border-white/20">
          <h2 id="contact-form-title" className="text-xl font-bold text-white">Solicitar información</h2>
          <Button variant="ghost" size="icon" onClick={close} disabled={submitting} className="rounded-full text-white/80 hover:text-white hover:bg-white/10">
            <X className="w-5 h-5" aria-hidden />
          </Button>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={submit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField id="firstName" label="Nombre" error={errors.firstName}>
                <Input
                  id="firstName"
                  value={form.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                  placeholder="Tu nombre"
                  disabled={submitting}
                  className={INPUT_STYLE}
                />
              </FormField>
              <FormField id="lastName" label="Apellido" error={errors.lastName}>
                <Input
                  id="lastName"
                  value={form.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                  placeholder="Tu apellido"
                  disabled={submitting}
                  className={INPUT_STYLE}
                />
              </FormField>
            </div>

            <FormField id="whatsapp" label="WhatsApp" error={errors.whatsapp}>
              <Input
                id="whatsapp"
                type="tel"
                inputMode="numeric"
                value={form.whatsapp}
                onChange={(e) => update("whatsapp", formatWhatsApp(e.target.value))}
                placeholder="10 dígitos"
                maxLength={10}
                disabled={submitting}
                className={INPUT_STYLE}
              />
            </FormField>

            <FormField id="email" label="Correo" error={errors.email}>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="tu@email.com"
                disabled={submitting}
                className={INPUT_STYLE}
              />
            </FormField>

            <FormField id="state" label="Estado" error={errors.state}>
              <select
                id="state"
                value={form.state}
                onChange={(e) => update("state", e.target.value)}
                disabled={submitting}
                className={cn("flex h-9 w-full rounded-lg border px-3 py-2 text-sm", INPUT_STYLE)}
              >
                <option value="">Selecciona tu estado</option>
                {ESTADOS_MEXICO.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </FormField>

            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="accepts"
                  checked={form.acceptsContact}
                  onCheckedChange={(c) => update("acceptsContact", !!c)}
                  disabled={submitting}
                  className="mt-1 border-white/50 data-[state=checked]:bg-[#F29F0E] data-[state=checked]:border-[#F29F0E]"
                />
                <Label htmlFor="accepts" className={cn(LABEL_STYLE, "font-normal cursor-pointer leading-relaxed")}>
                  Acepto que Top Learning me contacte por WhatsApp para brindarme información sobre el curso de IA y ayudarme con la inscripción.
                </Label>
              </div>
              {errors.acceptsContact && (
                <p className="flex items-center gap-1 text-sm text-red-400">
                  <AlertCircle className="w-3 h-3" />
                  {errors.acceptsContact}
                </p>
              )}
            </div>

            {submitError && (
              <p className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 rounded-lg p-3">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {submitError}
              </p>
            )}

            <Button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full py-6 text-base font-bold"
              style={{ backgroundColor: "#F29F0E", borderColor: "#F29F0E", color: "white" }}
            >
              {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
              {submitting ? "Enviando..." : "Solicitar Información"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
})

export default ContactFormModal
