import { verifySignature } from '@/utils/webhooks'
import { revalidatePath } from 'next/cache'
import { headers } from 'next/headers'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const headersList = await headers()
  const signature = headersList.get('webhook-signature')

  try {
    if (signature) {
      verifySignature(body, signature)
    } else {
      return new Response('Signature missing', { status: 400 })
    }
  } catch (err) {
    return new Response('Error validating signature', { status: 500 })
  }

  const { full_slug } = body

  try {
    revalidatePath(full_slug === 'home' ? '/' : `/${full_slug}`)
    return new Response(JSON.stringify({ revalidated: true }), { status: 200 })
  } catch (err) {
    return new Response('Error revalidating', { status: 500 })
  }
}
