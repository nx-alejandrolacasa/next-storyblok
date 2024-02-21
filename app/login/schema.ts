import { z } from 'zod'

export const loginSchema = z
  .object({
    email: z
      .string({
        required_error: 'Username is required.',
      })
      .email({
        message: 'Username must be a valid email address.',
      })
      .min(2, {
        message: 'Username must be at least 2 characters.',
      }),
    password: z
      .string({
        required_error: 'Password is required.',
      })
      .min(8, {
        message: 'Password must be at least 8 characters.',
      }),
  })
  .required({
    email: true,
    password: true,
  })
