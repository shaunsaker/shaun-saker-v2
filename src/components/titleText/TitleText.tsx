import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = HTMLAttributes<HTMLDivElement>

export const TitleText = ({ className = '', ...props }: Props) => {
  return (
    <div
      className={twMerge('font-display text-4xl font-bold text-white md:text-6xl', className)}
      {...props}
    />
  )
}
