// Next Imports
import { NextResponse } from 'next/server'

// Vars
const icons = ['ri-plane-line', 'ri-a-b', 'ri-grid-fill', 'ri-whatsapp-line', 'ri-building-line']

export async function GET() {
  return NextResponse.json(icons)
}
