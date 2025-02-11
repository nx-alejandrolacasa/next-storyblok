'use server'

import { contactFormSchema } from '@/app/contact/schema'
import { parseWithZod } from '@conform-to/zod'
import { redirect } from 'next/navigation'

export async function contact(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: contactFormSchema,
  })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  return redirect('/')
}
