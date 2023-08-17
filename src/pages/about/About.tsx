import React, { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Dialog } from '../../components/dialog/Dialog'
import { Typography } from '../../components/typography/Typography'
import { GO_BACK, Routes } from '../../Router'
import ShaunImage from '../../images/shaun.jpg'

export const About = (): React.ReactElement => {
  const navigate = useNavigate()

  const onDialogClose = useCallback(() => {
    navigate(GO_BACK)
  }, [navigate])

  return (
    <Dialog title="About" open onOpenChange={onDialogClose}>
      <ImageContainer>
        <Image src={ShaunImage} alt="A photo of Shaun" />
      </ImageContainer>

      <ParagraphText kind="paragraph">
        Hi, I&apos;m Shaun 👋🏻 A <s>Geologist</s>, <s>Environmental Consultant</s>,{' '}
        <b>self-taught Software Developer with over 7 years experience</b> in{' '}
        <s>Cape Town, South Africa 🇿🇦</s> Queensland, Australia 🇦🇺
      </ParagraphText>

      <ParagraphText kind="paragraph">
        Growing up in South Africa has played an essential role in shaping who I am today. Being
        born and raised in a culturally diverse and developing country has provided me with a unique
        perspective on life. Through my experiences, I have learned invaluable lessons and skills
        that have contributed significantly to my personal and professional growth, including:
        adaptability, empathy, resourcefulness, resilience, the importance of community and an
        awareness of global issues.
      </ParagraphText>

      <ParagraphText kind="paragraph">
        I love to solve real world problems with automation and AI and have had the privilege of{' '}
        <Link to={Routes.projects}>building with really talented people</Link> from high-performance
        engineering teams to agency in the rapid prototyping space, blockchain, healthcare and SaaS
        industries.
      </ParagraphText>

      <ParagraphText kind="paragraph">
        My tools of choice are: React, React-Native, Typescript and of course ChatGPT 😎
      </ParagraphText>

      <ParagraphText kind="paragraph">
        I value simplicity, async communication, practicality and fun.
      </ParagraphText>

      <ParagraphText kind="paragraph">
        I like to have fun and don&apos;t take myself too seriously. When I&apos;m not coding,
        you&apos;ll find me with my kids, camping, playing volleyball, going for a run, concocting
        something new in the kitchen, tinkering with 3D printing, electronics or Dall-e (as pictured
        in the background).
      </ParagraphText>

      <ParagraphText kind="paragraph">
        I&apos;m currently looking for a remote role on a smallish, async-first team that is doing
        something meaningful. Give me a shout if you think we could work together 🙂
      </ParagraphText>
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
