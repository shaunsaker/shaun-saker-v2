import React, { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentPropsWithoutRef<'div'>

export const Page = ({ className = '', children, ...props }: Props) => {
  return (
    <div
      className={twMerge('relative flex h-screen w-screen flex-col bg-black', className)}
      {...props}
    >
      {children}
    </div>
  )
}
