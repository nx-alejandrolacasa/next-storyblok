import {
  richTextResolver,
  type StoryblokRichTextNode,
} from '@storyblok/richtext'
import type { HTMLAttributes } from 'react'
import sanitizeHtml from 'sanitize-html'
import { cn } from '@/lib/utils'
import type { StoryblokRichtext } from '@/types/sb-types'

type RichTextProp = {
  text: StoryblokRichtext
  className?: string
} & HTMLAttributes<HTMLDivElement>

export function RichText({ text, className = '', ...rest }: RichTextProp) {
  return (
    <div
      {...rest}
      className={cn(className, 'nx-rich-text')}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: required for rich text
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(
          richTextResolver<string>().render(
            text as StoryblokRichTextNode<string>
          ),
          {
            allowedAttributes: {
              ...sanitizeHtml.defaults.allowedAttributes,
              a: [
                ...(sanitizeHtml.defaults.allowedAttributes.a || []),
                'target',
              ],
            },
          }
        ),
      }}
    />
  )
}
