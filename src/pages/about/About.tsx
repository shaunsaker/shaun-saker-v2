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
          TLDR: I pivoted from rocks to code 🚀
          <br />
          <br />
          Early on in my career as a Geologist, I was buried under an avalanche of manual processes,
          something was at fault, it was a bore and it wasn't very Gneiss 😉
          <br />
          <br />
          I knew there had to be a better way. So I taught myself how to code. All of a sudden I had
          superpowers, automating processes left, right and center, with some staff not even knowing
          what to do with their time anymore, I was the schist 😎
          <br />
          <br />
          It wasn’t enough; I wanted more superpowers. So I spent the next 6 months studying coding
          after hours, much to my wife and dog’s dismay - not only because I had less availability
          but because they were forced to look at all the things I had built, “See how I just made
          that text turn red!” 🤓
          <br />
          <br />
          But eventually I did it! I got my first job as a real live web developer, making websites
          on the internet! Although even that wouldn’t quench my insatiable thirst for automation…
          🤖
          <br />
          <br />
          Shortly thereafter, during a chance encounter with my wife’s employer’s neighbour, I
          discovered the many gross inefficiencies lurking in the medical industry. This encounter
          led to me spearheading the development of a mobile app for one of South Africa’s largest
          hospital networks, Mediclinic, which they used to replace paper at hundreds of sporting
          events across the country, streamlining operations and saving the planet, #winning 🥇
          <br />
          <br />
          My journey has been fuelled by a passion for automation and shaped by three guiding
          principles: simplicity, practicality and fun, that I have brought to every endeavour. Fast
          forward 8 years and many projects later, in the words of Pinocchio, I shout from the
          rooftops, “I’m a real boy!” 🤣
          <br />
          <br />
          Thanks for reading. I hope you enjoyed my Geology puns 😅
        </ParagraphText>
      </div>
    </Dialog>
  )
}
