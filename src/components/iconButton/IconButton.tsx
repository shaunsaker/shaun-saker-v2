import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = HTMLAttributes<HTMLButtonElement>

export const IconButton = ({ className = '', ...props }: Props) => {
  return (
    <button
      className={twMerge(
        'flex size-16 items-center justify-center rounded-full border-2 border-white bg-black p-2 text-3xl text-white shadow-lg transition-colors hover:border-teal-400 hover:text-teal-400 focus-visible:outline-teal-400 active:text-teal-400',
        className,
      )}
      {...props}
    ></button>
  )
}
