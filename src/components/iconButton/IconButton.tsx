import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = HTMLAttributes<HTMLButtonElement>

export const IconButton = ({ className = '', title, children, ...props }: Props) => {
  return (
    <button
      className={twMerge(
        'flex flex-col size-16 sm:size-20 gap-y-0.5 items-center justify-center rounded-full border-2 border-white bg-black p-2.5 text-3xl text-white shadow-lg transition-colors hover:border-teal-500 hover:text-teal-500 focus-visible:outline-teal-400 active:text-teal-400 focus-visible:text-teal-400',
        className,
      )}
      role="button"
      {...props}
    >
      {children}

      {title && <span className="hidden sm:block text-xs font-medium">{title}</span>}
    </button>
  )
}
