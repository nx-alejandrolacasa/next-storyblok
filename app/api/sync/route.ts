import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const body: BodyInit = await request.json()
  return new Response(body)
}
