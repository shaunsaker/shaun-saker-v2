import React, { ReactElement, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { Dialog } from '@/components/dialog/Dialog'
import { ParagraphText } from '@/components/paragraphText/ParagraphText'
import ShaunImage from '@/images/shaun.webp'
import { GO_BACK } from '@/Router'

export const About = (): ReactElement => {
  const navigate = useNavigate()

  const onDialogClose = useCallback(() => {
    navigate(GO_BACK)
  }, [navigate])

  return (
    <Dialog title="About" open onClose={onDialogClose}>
      <img
        className="border-white mb-8 h-64 rounded-lg border-4"
        src={ShaunImage}
        alt="A photo of Shaun smiling like he just did something remarkeable but in reality is actually just standing in the garden while his wife photographs him"
      />

      <div className="space-y-4">
        <ParagraphText>
          Hello 👋🏻 My name’s Shaun Saker and I’m a Product Engineer based in Brisbane, Australia 🇦🇺
        </ParagraphText>

        <ParagraphText>
          I’m originally a qualified Geologist of all things and after spending years doing many
          very manual and tedious processes, that I could automate, if only I knew how to code. So I
          did just that and enrolled in Python course. I came back to the office, wrote a few
          scripts and fell in love 😍
        </ParagraphText>

        <ParagraphText>
          It was then and there that I decided this is what I wanted to do next so I spent the next
          6 months studying after hours, until I got my first job as a Web Developer in Cape Town 🤓
        </ParagraphText>

        <ParagraphText>
          Fast forward almost 8 years later (wow), I’m now the Lead Frontend Engineer for a startup
          called SAVI Surgical where we’re leveraging AI and ML in the Med-tech space. I’ve built
          products in various other industries along the way including the productivity space with
          my absolute favourite startup called Timeular based in Austria. During my time at the AUX
          Studio in Cape Town, I got to do loads of rapid prototyping and I was the Lead Engineer on
          a mobile project for one of the largest hospital networks in South Africa.
        </ParagraphText>

        <ParagraphText>
          I love to build amazing products that solve actual problems and I like to keep things
          simple, practical and fun 🤩
        </ParagraphText>

        <ParagraphText>
          That being said, when I’m not coding, I enjoy my daily runs, playing volleyball, being
          outdoors as much as possible, cooking and experimenting in the kitchen and braai/BBQ, and
          of course I love my amazing little family, I have a beautiful wife Astrid and beautiful 5
          year old daughter Isla, who just started school, as well as the cutest 3 year old boy you
          have ever seen, Cole ❤️
        </ParagraphText>

        <ParagraphText>
          And that’s me in a nutshell. Thanks for stopping by! Cheers 👋🏻
        </ParagraphText>
      </div>
    </Dialog>
  )
}
