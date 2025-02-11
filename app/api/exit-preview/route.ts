import { cookies, draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const slug = searchParams.get('slug')

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

  // Redirect the user back to the index page
  redirect(`/${slug}`)
}
