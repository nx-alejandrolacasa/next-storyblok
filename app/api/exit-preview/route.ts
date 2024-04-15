import { NextRequest } from 'next/server'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export const runtime = 'nodejs'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const slug = searchParams.get('slug')

  // Exit the current user from "Preview Mode". This function accepts no args.
  draftMode().disable()

  // set the cookies to None
  // const cookies = res.getHeader('Set-Cookie') as string[]
  //
  // res.setHeader(
  //   'Set-Cookie',
  //   cookies.map((cookie) =>
  //     cookie.replace('SameSite=Lax', 'SameSite=None;Secure')
  //   )
  // )

  // Redirect the user back to the index page
  redirect(`/${slug}`)
}
