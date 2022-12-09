import React, { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Dialog } from '../../components/dialog/Dialog'
import { LinkText } from '../../components/typography/LinkText'
import { Typography } from '../../components/typography/Typography'
import { Constants } from '../../constants'
import { GO_BACK, Routes } from '../../Router'

export const About = (): React.ReactElement => {
  const navigate = useNavigate()

  const onDialogClose = useCallback(() => {
    navigate(GO_BACK)
  }, [navigate])

  return (
    <Dialog title="About" open onOpenChange={onDialogClose}>
      <ParagraphText kind="paragraph">
        Hi, I&apos;m Shaun 👋🏻 A <s>Geologist</s>, <s>Environmental Consultant</s>,{' '}
        <b>self-taught Frontend Developer</b> from <s>Cape Town, South Africa 🇿🇦</s> Queensland,
        Australia 🇦🇺
      </ParagraphText>

      <ParagraphText kind="paragraph">
        I love to solve real world problems, automating and improving DX, mostly on the Frontend,
        where the magic happens (shots fired 😛) and have had the privilege of{' '}
        <Link to={Routes.projects}>building with really talented people</Link> in the rapid
        prototyping space, blockchain, medical and SaaS industries.
      </ParagraphText>

      <ParagraphText kind="paragraph">
        My tools of choice are: React, React-Native, Typescript and Electron 😎 I also enjoy some
        Solidity and web3 🤠
      </ParagraphText>

      <ParagraphText kind="paragraph">
        I like to have fun and don&apos;t take myself too seriously. When I&apos;m not coding,
        you&apos;ll find me with my kids, camping, concocting something new in the kitchen,
        tinkering with 3D printing, electronics or Dall-e (as pictured in the background).
      </ParagraphText>

      <Typography kind="paragraph">
        I&apos;m currently looking for a remote role on a smallish team, where I feel I can make the
        most impact. <LinkText href={`mailto:${Constants.email}`}>Give me a shout</LinkText> if you
        think we could work together 🙂
      </Typography>
    </Dialog>
  )
}

const ParagraphText = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing.md}px; ;
`
