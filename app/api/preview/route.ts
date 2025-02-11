import { cookies, draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const slug = searchParams.get('slug')
  const secret = searchParams.get('secret')

  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (secret !== process.env.STORYBLOK_TOKEN) {
    return new Response('Invalid token', {
      status: 401,
    })
  }

  // Exit the current user from "Preview Mode". This function accepts no args.
  const draft = await draftMode()

  draft.disable()

  const cookieStore = await cookies()

  for (const cookie of cookieStore.getAll()) {
    cookieStore.set(cookie.name, cookie.value, {
      sameSite: 'none',
      secure: true,
      partitioned: true,
    })
  }
  // get the storyblok params for the bridge to work
  const params = request.url?.split('?')

  // Redirect to the path from entry
  redirect(params ? `/${slug}?${params[1]}` : `/${slug}`)
}
