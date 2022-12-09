import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dialog } from '../../components/dialog/Dialog'
import { Typography } from '../../components/typography/Typography'
import { GO_BACK } from '../../Router'

interface AboutProps {}

export const About = ({}: AboutProps): React.ReactElement => {
  const navigate = useNavigate()

  const onDialogClose = useCallback(() => {
    navigate(GO_BACK)
  }, [navigate])

  return (
    <Dialog title="About" open onOpenChange={onDialogClose}>
      <Typography kind="paragraph">
        Hi, I'm Shaun 👋🏻 A <s>Geologist</s>, <s>Environmental Consultant</s>, Frontend Developer
        from <s>Cape Town, South Africa 🇿🇦</s> Queensland, Australia 🇦🇺
      </Typography>

      <Typography kind="paragraph">
        I love to solve real world problems, automating and improving DX, mostly on the Frontend,
        where the magic happens (shots fired 😛) and have had the privelege of building with really
        talented people in the rapid prototyping space, blockchain and medical and SAAS industries.
      </Typography>

      <Typography kind="paragraph">
        My tools of choice are: React, React-Native, Typescript and Electron 😎
      </Typography>

      <Typography kind="paragraph">
        When I'm not coding, you'll find me with my kids, camping, concocting something new in the
        kitchen, tinkering with 3D printing, electronics or Dall-e (as pictured in the background).
      </Typography>

      <Typography kind="paragraph">
        I'm currently looking for a remote role on a smallish team (where I feel I can make the most
        impact). Give me a shout if you think we could work together 🔥
      </Typography>
    </Dialog>
  )
}
