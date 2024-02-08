import React, { HTMLAttributes, ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

import { TitleText } from '../titleText/TitleText'

type Props = HTMLAttributes<HTMLDivElement>

export const Tooltip = ({ className = '', title }: Props): ReactElement => {
  return (
    <div className={twMerge('flex flex-col items-center', className)}>
      <div className="rounded-2xl bg-black py-4 px-6 shadow-2xl">
        <TitleText className="whitespace-nowrap text-center">{title}</TitleText>
      </div>

      <div className="-mt-4 size-0 border-[48px] border-b-0 border-x-transparent border-t-black" />
    </div>
  )
}
