import crypto from 'node:crypto'

export function verifySignature(body: object, signature: string) {
  const secret = process.env.STORYBLOK_WEBHOOK_SECRET

  if (!secret) {
    throw new Error('Storyblok Webhook Secret not defined')
  }

  const bodyHmac = crypto
    .createHmac('sha1', secret)
    .update(JSON.stringify(body))
    .digest('hex')

  if (bodyHmac !== signature) {
    throw new Error('Signature mismatch!')
  }
}
