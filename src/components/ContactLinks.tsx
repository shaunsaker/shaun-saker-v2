import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import { Github } from './icons/Github'
import { Linkedin } from './icons/Linkedin'
import { Mail } from './icons/Mail'

const contactLinks = [
  {
    href: `mailto:sakershaun@gmail.com`,
    Icon: Mail,
  },
  {
    href: 'https://www.linkedin.com/in/shaunsaker',
    Icon: Linkedin,
  },
  {
    href: 'https://github.com/shaunsaker',
    Icon: Github,
  },
]

export const ContactLinks = () => {
  return (
    <Container>
      {contactLinks.map(link => (
        <IconContainer key={link.href} href={link.href} target="_blank">
          <link.Icon style={{ fontSize: 24, color: theme.colors.white }} />
        </IconContainer>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const ICON_SIZE = 50

const IconContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;
  border-radius: ${ICON_SIZE / 2}px;
  margin: 0 ${({ theme }) => theme.rhythm.md}px;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`
