import { XMLParser } from 'fast-xml-parser'
import { NextApiRequest, NextApiResponse } from 'next'
import * as process from 'process'

export default async function jobs(req: NextApiRequest, res: NextApiResponse) {
  const parser = new XMLParser({ ignorePiTags: true })

  if (!process.env.JOBS_URL) {
    return res.status(500).json({ message: 'Invalid jobs URL' })
  }

  const data = await fetch(process.env.JOBS_URL).then((response) =>
    response.text()
  )

  const jobs = parser.parse(data)

  if (!jobs?.['workzag-jobs']?.position) {
    res.status(500).json({ message: 'Invalid jobs data' })
  }

  return res.status(200).json(jobs['workzag-jobs'].position)
}
