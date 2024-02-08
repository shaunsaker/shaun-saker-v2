import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = HTMLAttributes<HTMLDivElement>

export const HeadingText = ({ className = '', ...props }: Props) => {
  return (
    <div
      className={twMerge('font-display text-3xl font-bold text-white md:text-4xl', className)}
      {...props}
    />
  )
}
