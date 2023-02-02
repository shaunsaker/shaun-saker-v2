import React, { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Dialog } from '../../components/dialog/Dialog'
import { LinkText } from '../../components/typography/LinkText'
import { Typography } from '../../components/typography/Typography'
import { Constants } from '../../constants'
import { GO_BACK, Routes } from '../../Router'
import ShaunImage from '../../images/shaun.png'

export const About = (): React.ReactElement => {
  const navigate = useNavigate()

  const onDialogClose = useCallback(() => {
    navigate(GO_BACK)
  }, [navigate])

  return (
    <Dialog title="About" open onOpenChange={onDialogClose}>
      <ImageContainer>
        <Image src={ShaunImage} alt="A photo of Shaun smiling and holding a beer" />
      </ImageContainer>

      <ParagraphText kind="paragraph">
        Hi, I&apos;m Shaun 👋🏻 A <s>Geologist</s>, <s>Environmental Consultant</s>,{' '}
        <b>self-taught Frontend Developer</b> from <s>Cape Town, South Africa 🇿🇦</s> Queensland,
        Australia 🇦🇺
      </ParagraphText>

      <ParagraphText kind="paragraph">
        I love to solve real world problems, automating things and improving DX, mostly on the
        Frontend, where the magic happens (shots fired 😛) and have had the privilege of{' '}
        <Link to={Routes.projects}>building with really talented people</Link> from high-performance
        engineering teams to agency in the rapid prototyping space, blockchain, healthcare and SaaS
        industries.
      </ParagraphText>

      <ParagraphText kind="paragraph">
        My tools of choice are: React, React-Native, Typescript and Electron 😎 I also enjoy some
        Solidity and web3 🤠
      </ParagraphText>

      <ParagraphText kind="paragraph">
        I value simplicity, fun, transparency and ownership.
      </ParagraphText>

      <ParagraphText kind="paragraph">
        I like to have fun and don&apos;t take myself too seriously. When I&apos;m not coding,
        you&apos;ll find me with my kids, camping, going for a run, concocting something new in the
        kitchen, tinkering with 3D printing, electronics or Dall-e (as pictured in the background).
      </ParagraphText>

      <Typography kind="paragraph">
        I&apos;m currently looking for a remote role on a smallish team that is doing something
        meaningful. <LinkText href={`mailto:${Constants.email}`}>Give me a shout</LinkText> if you
        think we could work together 🙂
      </Typography>
    </Dialog>
  )
}

const ImageContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`

const Image = styled.img`
  width: 186px;
  height: 186px;
  border-radius: ${({ theme }) => theme.radius.lg}px;
  border: 4px solid ${({ theme }) => theme.colors.white100};
`

const ParagraphText = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`
