import { NextApiRequest, NextApiResponse } from 'next'
import { verifySignature } from '@/utils/webhooks'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const signature = req.headers['webhook-signature'] as string

  try {
    if (signature) {
      verifySignature(req.body, signature)
    } else {
      return res.status(400).json({ message: 'Signature missing' })
    }
  } catch (err) {
    return res.status(500).send('Error validating signature')
  }

  const { full_slug } = req.body

  try {
    await res.revalidate(full_slug === 'home' ? '/' : `/${full_slug}`)
    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
