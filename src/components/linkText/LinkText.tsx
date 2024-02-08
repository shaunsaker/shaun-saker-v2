import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = HTMLAttributes<HTMLAnchorElement> & { href: string }

export const LinkText = ({ className = '', ...props }: Props) => {
  return (
    <a
      className={twMerge(
        'text-teal-400 underline underline-offset-4 transition-colors hover:text-amber-500',
        className,
      )}
      {...props}
    />
  )
}
