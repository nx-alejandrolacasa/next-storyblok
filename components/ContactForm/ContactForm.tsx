'use client'

import { contact } from '@/app/_actions/contact'
import { contactFormSchema } from '@/app/contact/schema'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { useFormState, useFormStatus } from 'react-dom'

function SubmitButton() {
  const { pending } = useFormStatus()
  return <Button type="submit">{pending ? 'Submitting...' : 'Submit'}</Button>
}

export function ContactForm() {
  const [lastResult, formAction] = useFormState(contact, {})
  const [form, fields] = useForm({
    // Sync the result of last submission
    lastResult,
    // Reuse the validation logic on the client
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: contactFormSchema })
    },
    // Validate the form on blur event triggered
    shouldValidate: 'onBlur',
  })

  return (
    <div className="flex flex-col gap-8">
      <form
        action={formAction}
        className="space-y-4"
        id={form.id}
        noValidate
        onSubmit={form.onSubmit}
      >
        <fieldset>
          <label htmlFor={fields.fullName.name}>Full Name</label>
          <Input
            className="w-96"
            placeholder="Enter your full name"
            name={fields.fullName.name}
            type="text"
          />
          <small className="inline-block min-h-4 text-red-500">
            {fields.fullName.errors}
          </small>
        </fieldset>

        <fieldset>
          <label htmlFor={fields.email.name}>Email</label>
          <Input
            className="w-96"
            placeholder="Enter your email"
            name={fields.email.name}
            type="email"
          />
          <small className="inline-block min-h-4 text-red-500">
            {fields.email.errors}
          </small>
        </fieldset>

        <fieldset>
          <label htmlFor={fields.subject.name}>Subject</label>
          <Input
            className="w-96"
            placeholder="Enter subject"
            name={fields.subject.name}
            type="text"
          />
          <small className="inline-block min-h-4 text-red-500">
            {fields.subject.errors}
          </small>
        </fieldset>

        <fieldset>
          <label htmlFor={fields.message.name}>Message</label>
          <Textarea
            className="min-h-[120px] w-96 rounded-md border border-input bg-background px-3 py-2"
            placeholder="Enter your message"
            name={fields.message.name}
          />
          <small className="inline-block min-h-4 text-red-500">
            {fields.message.errors}
          </small>
        </fieldset>

        <fieldset>
          <label htmlFor={fields.phoneNumber.name}>
            Phone Number (Optional)
          </label>
          <Input
            className="w-96"
            placeholder="Enter your phone number"
            name={fields.phoneNumber.name}
            type="tel"
          />
          <small className="inline-block min-h-4 text-red-500">
            {fields.phoneNumber.errors}
          </small>
        </fieldset>

        <SubmitButton />
      </form>
    </div>
  )
}
