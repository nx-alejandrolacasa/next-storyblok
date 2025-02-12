import { z } from 'zod'

export const contactFormSchema = z
  .object({
    fullName: z
      .string({
        required_error: 'Full name is required.',
      })
      .min(2, {
        message: 'Full name must be at least 2 characters.',
      }),
    email: z
      .string({
        required_error: 'Email is required.',
      })
      .email({
        message: 'Must be a valid email address.',
      }),
    subject: z
      .string({
        required_error: 'Subject is required.',
      })
      .min(5, {
        message: 'Subject must be at least 5 characters.',
      }),
    message: z
      .string({
        required_error: 'Message is required.',
      })
      .min(20, {
        message: 'Message must be at least 20 characters.',
      }),
    phoneNumber: z
      .string()
      .regex(/^\+?[1-9]\d{1,14}$/, {
        message: 'Please enter a valid phone number.',
      })
      .optional(),
  })
  .required({
    fullName: true,
    email: true,
    subject: true,
    message: true,
  })
