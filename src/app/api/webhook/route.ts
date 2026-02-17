import { NextRequest, NextResponse } from "next/server"

const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_WEBHOOK_URL ?? "https://toplearning.app.n8n.cloud/webhook-test/janin"

export async function GET(request: NextRequest) {
  try {
    const qs = request.nextUrl.searchParams.toString()
    const url = qs ? `${WEBHOOK_URL}?${qs}` : WEBHOOK_URL
    const res = await fetch(url, { method: "GET" })
    if (!res.ok) {
      const text = await res.text()
      console.error("[webhook] n8n:", res.status, text)
      return NextResponse.json({ error: "Error al enviar" }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Error de conexión" }, { status: 500 })
  }
}
