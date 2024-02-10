import React, { ReactElement, ReactNode } from 'react'

import { Page } from '@/components/page/Page'
import { Tooltip } from '@/components/tooltip/Tooltip'
import Background from '@/images/background.png'

import { Menu } from './Menu'

type Props = {
  children: ReactNode
}

export const Home = ({ children }: Props): ReactElement => {
  return (
    <Page>
      <div
        className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-cover bg-center"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <Tooltip className="mb-32" title="Ello Gov'na!" />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex justify-center p-4">
        <Menu />
      </div>

      {children}
    </Page>
  )
}
