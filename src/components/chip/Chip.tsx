import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = HTMLAttributes<HTMLDivElement>

export const Chip = ({ className = '', ...props }: Props): React.ReactElement => {
  return (
    <div
      className={twMerge(
        'rounded-full bg-white/20 px-2 py-1 text-sm font-medium text-white',
        className,
      )}
      {...props}
    />
  )
}
