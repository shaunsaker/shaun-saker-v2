import { AnimatePresence } from 'framer-motion'
import React, { HTMLAttributes, ReactElement, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { useKeyPress } from '@/utils/useKeyPress/useKeyPress'

import { IconButton } from '../iconButton/IconButton'
import { CloseIcon } from '../icons/CloseIcon'
import { TitleText } from '../titleText/TitleText'

type DialogProps = { open?: boolean; onClose: () => void } & HTMLAttributes<HTMLDivElement>

export const Dialog = ({
  className = '',
  open,
  title,
  children,
  onClose,
  ...props
}: DialogProps): ReactElement => {
  const ref = useRef<HTMLDivElement>(null)

  useKeyPress('Escape', () => {
    if (open) {
      onClose()
    }
  })

  return (
    <AnimatePresence>
      {open && (
        <div
          ref={ref}
          className={twMerge(
            'fixed inset-0 z-10 flex items-center justify-center bg-black/80 p-4 md:p-8',
            className,
          )}
          {...props}
        >
          <div className="flex size-full max-w-xl flex-col rounded-2xl border-4 border-teal-400 bg-black p-4 shadow-lg md:p-8">
            <div className="mb-8 flex items-center justify-between">
              <TitleText>{title}</TitleText>

              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </div>

            <div className="overflow-y-auto pr-4">{children}</div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}
