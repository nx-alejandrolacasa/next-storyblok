import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  return new Response(body)
}
