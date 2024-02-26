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
        className="border-white mb-8 rounded-lg border-4 w-full max-w-64 min-h-32"
        src={ShaunImage}
        alt="A photo of Shaun smiling like he just did something remarkable but in reality is actually just standing in the garden while his wife photographs him"
      />

      <div className="space-y-4">
        <ParagraphText>
          Hello 👋🏻 My name’s Shaun and I’m a Product Engineer based in Brisbane, Australia 🇦🇺
          <br />
          <br />
          Originally a qualified Geologist, I spent years working with very manual processes that I
          knew I could automate if only I knew how to code. So I enrolled and completed a Python
          course via the University of Michigan, returned to the office, wrote a few scripts and
          fell in love 😍
          <br />
          <br />
          It was then and there that I decided that I wanted to code. I spent the next 6 months
          studying with FreeCodeCamp after hours, until I got my first job as a Web Developer in
          Cape Town 🤓
          <br />
          <br />
          Fast forward almost 8 years later, I’m currently the Lead Frontend Engineer at a startup
          called SAVI Surgical, where we’re leveraging AI and ML in the Med-tech space. I’ve built
          many products along the way and in wide array of industries including the productivity
          space (with my absolute favourite startup called Timeular based in Austria 🇦🇹). During my
          time at AUX Studio in Cape Town, I was lucky enough to do loads of rapid prototyping. I
          was also the Lead Engineer on a mobile project for one of the largest hospital networks in
          South Africa, Mediclinic.
          <br />
          <br />I love to build amazing products that solve actual problems and I like to keep
          things simple, practical and fun 🤩
          <br />
          <br />
          When I’m not coding, I enjoy my daily runs, playing volleyball, being outdoors as much as
          possible, cooking and experimenting in the kitchen and braai/BBQ, and of course I love
          spending time with my amazing little family. I have a beautiful wife Astrid (who is also a
          creative) and beautiful 5 year old daughter Isla, who just started school, as well as the
          cutest 3 year old boy you have ever seen, Cole ❤️
          <br />
          <br />
          And that’s me in a nutshell. Thanks for stopping by! Cheers 👋🏻
        </ParagraphText>
      </div>
    </Dialog>
  )
}
