import { NextRequest, NextResponse } from 'next/server'
import { verifySignature } from '@/utils/webhooks'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  const signature = request.headers.get('webhook-signature')
  const body = (await request.json()) satisfies { full_slug: string }

  try {
    if (signature) {
      verifySignature(body, signature)
    } else {
      return NextResponse.json(
        { message: 'Signature missing' },
        { status: 400 }
      )
    }
  } catch (err) {
    return NextResponse.json(
      { error: 'Error validating signature' },
      { status: 500 }
    )
  }

  const { full_slug } = body

  try {
    await revalidatePath(full_slug === 'home' ? '/' : `/${full_slug}`)
    return NextResponse.json({ revalidated: true }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: 'Error revalidating' }, { status: 500 })
  }
}
