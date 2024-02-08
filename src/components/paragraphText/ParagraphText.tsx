import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = HTMLAttributes<HTMLDivElement>

export const ParagraphText = ({ className = '', ...props }: Props) => {
  return <div className={twMerge('text-white', className)} {...props} />
}
