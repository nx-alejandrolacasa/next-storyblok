import { cn } from '@/lib/utils'
import type { RichtextStoryblok } from '@/types/sb-types'
import {
  type StoryblokRichTextNode,
  richTextResolver,
} from '@storyblok/richtext'
import DOMPurify from 'isomorphic-dompurify'
import type { HTMLAttributes } from 'react'

type RichTextProp = {
  text: RichtextStoryblok
  className?: string
} & HTMLAttributes<HTMLDivElement>

export function RichText({ text, className = '', ...rest }: RichTextProp) {
  return (
    <div
      {...rest}
      className={cn(className, 'nx-rich-text')}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: required for rich text
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(
          richTextResolver<string>().render(
            text as StoryblokRichTextNode<string>
          ),
          {
            ADD_ATTR: ['target'],
          }
        ),
      }}
    />
  )
}
