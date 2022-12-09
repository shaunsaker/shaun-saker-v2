import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IconButton } from '../../components/iconButton/IconButton'
import { CodeIcon } from '../../components/icons/CodeIcon'
import { EnvelopeIcon } from '../../components/icons/EnvelopeIcon'
import { GithubIcon } from '../../components/icons/GithubIcon'
import { QuestionIcon } from '../../components/icons/QuestionIcon'
import { Page } from '../../components/page/Page'
import { Tooltip } from '../../components/tooltip/Tooltip'
import Background from '../../images/background.png'
import { Routes } from '../../Router'

interface HomeProps {
  children: ReactNode
}

export const Home = ({ children }: HomeProps): React.ReactElement => {
  return (
    <Page>
      <BackgroundImage />

      <ContentContainer>
        <ShoutoutContainer>
          <Tooltip title="Ello Gov'na!" size="lg" open>
            <div />
          </Tooltip>
        </ShoutoutContainer>

        <FooterContainer>
          <Tooltip title="About" size="md">
            <Link to={Routes.about}>
              <IconButton>
                <QuestionIcon />
              </IconButton>
            </Link>
          </Tooltip>

          <Tooltip title="Projects" size="md">
            <Link to={Routes.projects}>
              <IconButton>
                <CodeIcon />
              </IconButton>
            </Link>
          </Tooltip>

          <Tooltip title="Github" size="md">
            <IconButton
              as="a"
              href="https://github.com/shaunsaker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Give me a shout" size="md">
            <IconButton
              as="a"
              href="mailto:sakershaun@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EnvelopeIcon />
            </IconButton>
          </Tooltip>
        </FooterContainer>
      </ContentContainer>

      {children}
    </Page>
  )
}

const BackgroundImage = styled.div`
  position: fixed;
  inset: 0;
  background-image: url(${Background});
  background-size: cover;
  background-position: center center;
`

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const ShoutoutContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
`

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing.md}px;
  gap: ${({ theme }) => theme.spacing.md}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
