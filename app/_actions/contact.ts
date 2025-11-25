'use server'

import { parseWithZod } from '@conform-to/zod'
import { redirect } from 'next/navigation'
import { contactFormSchema } from '@/app/[locale]/contact/schema'

export async function contact(_prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: contactFormSchema,
  })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  return redirect('/')
}
