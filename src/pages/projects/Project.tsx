import React, { ReactNode } from 'react'

import { HeadingText } from '@/components/headingText/HeadingText'
import { ParagraphText } from '@/components/paragraphText/ParagraphText'

import { Chip } from '../../components/chip/Chip'

interface ProjectProps {
  title: ReactNode
  description: ReactNode
  skills: string[]
}

export const Project = ({ title, description, skills }: ProjectProps): React.ReactElement => {
  return (
    <div className="mb-4 border-b pb-8">
      <HeadingText className="mb-4">{title}</HeadingText>

      <ParagraphText>{description}</ParagraphText>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map(skill => (
          <Chip key={skill}>{skill}</Chip>
        ))}
      </div>
    </div>
  )
}
