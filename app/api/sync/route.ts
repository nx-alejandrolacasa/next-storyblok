import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()

  console.log(body)

  return new Response(body)
}
