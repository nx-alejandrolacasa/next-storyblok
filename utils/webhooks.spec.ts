import crypto from 'node:crypto'
import { verifySignature } from '@/utils/webhooks'

describe('verifySignature', () => {
  beforeEach(() => {
    process.env.STORYBLOK_WEBHOOK_SECRET = 'secret'
  })

  it('throws an error if STORYBLOK_WEBHOOK_SECRET is not defined', () => {
    delete process.env.STORYBLOK_WEBHOOK_SECRET
    const body = { foo: 'bar' }
    const signature = 'abc123'
    expect(() => verifySignature(body, signature)).toThrow(
      'Storyblok Webhook Secret not defined'
    )
  })

  it('throws an error if the signature does not match the hash of the request body', () => {
    const body = { foo: 'bar' }
    const signature = 'abc123'
    expect(() => verifySignature(body, signature)).toThrow(
      'Signature mismatch!'
    )
  })

  it('does not throw an error if the signature matches the hash of the request body', () => {
    const body = { foo: 'bar' }
    const signature = crypto
      .createHmac('sha1', 'secret')
      .update(JSON.stringify(body))
      .digest('hex')
    expect(() => verifySignature(body, signature)).not.toThrow()
  })
})
