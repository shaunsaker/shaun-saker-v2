import React, { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { ParagraphText } from '@/components/paragraphText/ParagraphText'

import { Dialog } from '../../components/dialog/Dialog'
import ShaunImage from '../../images/shaun.jpeg'
import { GO_BACK, Routes } from '../../Router'

export const About = (): React.ReactElement => {
  const navigate = useNavigate()

  const onDialogClose = useCallback(() => {
    navigate(GO_BACK)
  }, [navigate])

  return (
    <Dialog title="About" open onClose={onDialogClose}>
      <img
        className="border-white-100 mb-8 size-48 rounded-lg border-4"
        src={ShaunImage}
        alt="A photo of Shaun smiling like he just did something remarkeable but in reality is actually just standing in the garden while his wife photographs him"
      />

      <div className="space-y-4">
        <ParagraphText>
          Hi, I&apos;m Shaun 👋🏻 A <s>Geologist</s>, <s>Environmental Consultant</s>,{' '}
          <b>self-taught Software Developer with over 7 years experience</b> in{' '}
          <s>Cape Town, South Africa 🇿🇦</s> Queensland, Australia 🇦🇺
        </ParagraphText>

        <ParagraphText>
          Growing up in South Africa has played an essential role in shaping who I am today. Being
          born and raised in a culturally diverse and developing country has provided me with a
          unique perspective on life. Through my experiences, I have learned invaluable lessons and
          skills that have contributed significantly to my personal and professional growth,
          including: adaptability, empathy, resourcefulness, resilience, the importance of community
          and an awareness of global issues.
        </ParagraphText>

        <ParagraphText>
          I love to solve real world problems with automation and AI and have had the privilege of{' '}
          <Link to={Routes.projects}>building with really talented people</Link> from
          high-performance engineering teams to agency in the rapid prototyping space, blockchain,
          healthcare and SaaS industries.
        </ParagraphText>

        <ParagraphText>
          My tools of choice are: React, React-Native, Typescript and of course GPTs 😎
        </ParagraphText>

        <ParagraphText>
          I value simplicity, async communication, practicality and fun.
        </ParagraphText>

        <ParagraphText>
          I like to have fun and don&apos;t take myself too seriously. When I&apos;m not coding,
          you&apos;ll find me with my kids, camping, playing volleyball, going for a run, concocting
          something new in the kitchen, tinkering with 3D printing, electronics or Dall-e (as
          pictured in the background).
        </ParagraphText>

        <ParagraphText>
          I&apos;m currently looking for a remote role on a smallish, async-first team that is doing
          something meaningful. Give me a shout if you think we could work together 🙂
        </ParagraphText>
      </div>
    </Dialog>
  )
}
