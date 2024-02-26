import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import React, { ReactElement, ReactNode } from 'react'

import { Chip } from '@/components/chip/Chip'
import { HeadingText } from '@/components/headingText/HeadingText'
import { ParagraphText } from '@/components/paragraphText/ParagraphText'
import { useLink } from '@/utils/useLink/useLink'

export type ProjectProps = {
  image?: string
  title: string
  description: ReactNode
  tags: string[]
  href?: string
}

export const Project = ({ image, title, description, tags, href }: ProjectProps): ReactElement => {
  const link = useLink()

  return (
    <div className="mb-8 border-b pb-8 flex flex-col gap-y-4">
      {image && <img src={image} alt={title} className="border-white rounded-lg border-4 w-full min-h-32" />}

      <div className="flex items-center gap-x-4">
        <HeadingText>{title}</HeadingText>

        {href && (
          <button
            className="hover:text-teal-400 focus-visible:text-teal-400 active:text-teal-400 text-white"
            onClick={() => link(href)}
          >
            <ArrowTopRightOnSquareIcon className="size-8" />
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>

      <ParagraphText>{description}</ParagraphText>
    </div>
  )
}
