import { ISbRichtext, renderRichText } from '@storyblok/react'
import clsx from 'clsx'
import DOMPurify from 'isomorphic-dompurify'

type RichTextProp = {
  text: ISbRichtext
  className?: string
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export function RichText({ text, className = '', ...rest }: RichTextProp) {
  return (
    <div
      {...rest}
      className={clsx(className, 'nx-rich-text')}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(renderRichText(text)),
      }}
    />
  )
}
