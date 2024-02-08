import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

import { TitleText } from '../titleText/TitleText'

type Props = HTMLAttributes<HTMLDivElement>

export const Tooltip = ({ className = '', title }: Props): React.ReactElement => {
  return (
    <div className={twMerge('flex flex-col items-center', className)}>
      <div className="rounded-lg bg-black p-4 shadow-lg">
        <TitleText className="whitespace-nowrap text-center">{title}</TitleText>
      </div>

      <div className="-mt-4 size-0 border-[48px] border-b-0 border-x-transparent border-t-black" />
    </div>
  )
}
