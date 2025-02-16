import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-12 w-full rounded-md border border-stone-200 bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-stone-500 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-stone-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-stone-800 dark:focus-visible:ring-stone-300 dark:placeholder:text-stone-400',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export { Input }
