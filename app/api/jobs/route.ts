import { XMLParser } from 'fast-xml-parser'
import { NextResponse } from 'next/server'

export async function GET() {
  const parser = new XMLParser({ ignorePiTags: true })

  const data = await fetch(
    'https://nexum-ag.jobs.personio.de/xml?language=en'
  ).then((response) => response.text())

  const jobs = parser.parse(data)

  return NextResponse.json(jobs, { status: 200 })
}
