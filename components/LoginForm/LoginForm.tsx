'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { login } from '@/app/_actions/login'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { loginSchema } from '@/app/login/schema'

function SubmitButton() {
  const { pending } = useFormStatus()
  return <Button type="submit">{pending ? 'Submitting...' : 'Submit'}</Button>
}

export function LoginForm() {
  const [lastResult, formAction] = useFormState(login, {})
  const [form, fields] = useForm({
    // Sync the result of last submission
    lastResult,
    // Reuse the validation logic on the client
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginSchema })
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
          <label htmlFor={fields.email.name}>Username</label>
          <Input
            className="w-96"
            placeholder={fields.email.name}
            name={fields.email.name}
            type="email"
          />
          <small className="inline-block min-h-4 text-red-500">
            {fields.email.errors}
          </small>
        </fieldset>
        <fieldset>
          <label htmlFor={fields.password.name}>Password</label>
          <Input
            className="w-96"
            placeholder={fields.password.name}
            name={fields.password.name}
            type="password"
          />
          <small className="inline-block min-h-4 text-red-500">
            {fields.password.errors}
          </small>
        </fieldset>
        <SubmitButton />
      </form>
    </div>
  )
}
