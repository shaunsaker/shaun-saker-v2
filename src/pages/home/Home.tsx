import React, { ReactElement, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

import { IconButton } from '@/components/iconButton/IconButton'
import { CodeIcon } from '@/components/icons/CodeIcon'
import { EnvelopeIcon } from '@/components/icons/EnvelopeIcon'
import { FileIcon } from '@/components/icons/FileIcon'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { LinkedInIcon } from '@/components/icons/LinkedInIcon'
import { NerdIcon } from '@/components/icons/NerdIcon'
import { Page } from '@/components/page/Page'
import { Tooltip } from '@/components/tooltip/Tooltip'
import { Constants } from '@/constants'
import Background from '@/images/background.png'
import { Routes } from '@/Router'
import { useLink } from '@/utils/useLink/useLink'

interface HomeProps {
  children: ReactNode
}

export const Home = ({ children }: HomeProps): ReactElement => {
  const link = useLink()
  const navigate = useNavigate()

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

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-4 p-4">
        <IconButton onClick={() => navigate(Routes.about)}>
          <NerdIcon />
        </IconButton>

        <IconButton onClick={() => navigate(Routes.projects)}>
          <CodeIcon />
        </IconButton>

        <IconButton onClick={() => link(Constants.github, '_blank')}>
          <GithubIcon />
        </IconButton>

        <IconButton onClick={() => link(Constants.linkedIn, '_blank')}>
          <LinkedInIcon />
        </IconButton>

        <IconButton onClick={() => link(Constants.resume, '_blank')}>
          <FileIcon />
        </IconButton>

        <IconButton onClick={() => link(`mailto:${Constants.email}`, '_blank')}>
          <EnvelopeIcon />
        </IconButton>
      </div>

      {children}
    </Page>
  )
}
