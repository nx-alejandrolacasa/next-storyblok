'use server'

import { parseWithZod } from '@conform-to/zod'
import { loginSchema } from '@/app/login/schema'
import { redirect } from 'next/navigation'

export async function login(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: loginSchema,
  })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  return redirect('/')
}
