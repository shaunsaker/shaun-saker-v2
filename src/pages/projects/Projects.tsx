import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Dialog } from '../../components/dialog/Dialog'
import { LinkText } from '../../components/typography/LinkText'
import { Typography } from '../../components/typography/Typography'
import { Constants } from '../../constants'
import { GO_BACK } from '../../Router'
import { Project } from './Project'

export const Projects = (): React.ReactElement => {
  const navigate = useNavigate()

  const onDialogClose = useCallback(() => {
    navigate(GO_BACK)
  }, [navigate])

  return (
    <Dialog title="Projects" open onOpenChange={onDialogClose}>
      <Project
        title="Timeular"
        description={
          <>
            For 3 years, I worked in a small high-performance engineering team as a Frontend
            Developer to develop a clever time-tracking solution,{' '}
            <LinkText href="http://timeular.com/">Timeular</LinkText>, with over 80 000 users all
            over the world, shipping incrementally. We improved and maintained a desktop, web and
            mobile app.
          </>
        }
        skills={['React', 'React-Native', 'Electron']}
      />

      <Spacer />

      <Project
        title="Scinapse"
        description={
          <>
            For ~2 years, I was the lead engineer on a project for the biggest hospital network in
            South Africa. At <LinkText href="https://aux.studio/">AUX Studio</LinkText>, we
            digitised their logging of injuries, vitals, prescriptions and diagnoses at South
            Africa&quot;s major sporting events.
          </>
        }
        skills={['React', 'React-Native', 'Firebase']}
      />

      <Spacer />

      <Project
        title="Daily Bitcoin Lottery"
        description={
          <>
            One of my favourite{' '}
            <LinkText href="https://github.com/shaunsaker/dbl-web-app">personal projects</LinkText>,
            I created a lottery on the Bitcoin blockchain (it&apos;s the TODO app of 2022 okay 😂).
            This was a huge learning curve for me as it involved a lot of research into a very
            unknown territory. In the end, I discovered Ethereum Smart Contracts, which prompted me
            to complete a full course in{' '}
            <LinkText href="https://www.youtube.com/watch?v=gyMwXuJrbJQ">
              Blockchain, Solidity and Full Stack Web3 development
            </LinkText>
            .
          </>
        }
        skills={['Typescript', 'React', 'React-Native', 'Firebase', 'BTC Blockchain']}
      />

      <Spacer />

      <Project
        title="Fat Buck"
        description={
          <>
            Another crypto-based{' '}
            <LinkText href="https://github.com/shaunsaker/fat-buck-mobile">
              personal project
            </LinkText>
            , Fat Buck was{' '}
            <LinkText href="https://github.com/shaunsaker/fat-buck-mobile-old">originally</LinkText>{' '}
            created to analyse stocks on the NYSE, JSE and Australian stock market using{' '}
            <LinkText href="https://www.investopedia.com/terms/b/bengraham.asp">
              Benjamin Graham&apos;s value investing technique
            </LinkText>
            . After realising that everything on the market was significantly overvalued, I pivoted
            to a crypto trading bot (naturally 😂). After a year of usage, I broke even lol.
          </>
        }
        skills={['Typescript', 'React', 'React-Native', 'Firebase', 'Python']}
      />

      <Spacer />

      <Project
        title="Recycled Filament"
        description={
          <>
            Before leaving South Africa, I took on an (overly) ambitious project, with the aim of
            providing jobs to people living in the townships by collecting recyclable plastic and
            turning it into 3D printer filament PLA. This was a huge project and involved a bit of
            everything, 3D design and printing, electronics, mechanical engineering and coding of
            course. I got as far as ordering all the parts and built the{' '}
            <LinkText href="https://www.thingiverse.com/thing:4845503">
              filament puller unit
            </LinkText>
            . After receiving our Australian visa, I had to handover the reigns to someone else. It
            was good fun though!
          </>
        }
        skills={['Fusion 360', '3D Printing', 'Arduino']}
      />

      <Spacer />

      <Project
        title="Launchasaur"
        description={
          <>
            Before I started using a Macbook and discovered Shortcuts (Windows meh), I created a{' '}
            <LinkText href="https://github.com/shaunsaker/launchasaur">
              cross-platform Electron app
            </LinkText>{' '}
            that would allow me to trigger multiple open/close apps/files/links actions at once,
            e.g. Open Spotify, Open VSCode, Open Terminus, Open Calendar, Open Email in one action.
          </>
        }
        skills={['Typescript', 'React', 'Electron', 'Firebase']}
      />

      <Spacer />

      <Project
        title="Nou Braai"
        description={
          <>
            <LinkText href="https://github.com/shaunsaker/nou-braai">A mobile app</LinkText> that
            connects to my home-made bluetooth temperature sensor (to be used in &quot;braaing&quot;
            aka cooking on fire because yolo) 🔥
          </>
        }
        skills={['Typescript', 'React', 'React-Native', 'Arduino', 'Bluetooth']}
      />

      <Spacer />

      <Project
        title="Bloutand"
        description={
          <>
            <LinkText href="https://github.com/shaunsaker/bloutand">An Electron app</LinkText> that
            used the experimental Web Bluetooth api to scan for nearby BLE devices,
            connect/disconnect to them and read and display battery level values from the connected
            device 🔵🦷
          </>
        }
        skills={['React', 'React-Native', 'Firebase']}
      />

      <Spacer />

      <Project
        title="Aisle 5"
        description={
          <>
            <LinkText href="https://github.com/shaunsaker/aisle-5-v2">A mobile app</LinkText> that
            predicts your grocery usage the more you use it, no more shopping lists! Automatic
            grocery ordering WIP.
          </>
        }
        skills={['Typescript', 'React', 'React-Native', 'Firebase']}
      />

      <Spacer />

      <Project
        title="CVD19ZA"
        description={
          <>
            <LinkText href="https://github.com/shaunsaker/covid-19-south-africa-app">
              A mobile app
            </LinkText>{' '}
            that automatically notified users of new COVID stats in South Africa (it was such a hot
            topic back then 😅).
          </>
        }
        skills={['React', 'React-Native', 'Firebase']}
      />

      <Spacer />

      <Project
        title="WineMe"
        description={
          <>
            <LinkText href="https://github.com/shaunsaker/wine-me">A mobile app</LinkText> that
            helps you to find the next best wine farm that you haven&apos;t visited, closest to you!
          </>
        }
        skills={['React', 'React-Native', 'Firebase']}
      />

      <Spacer />

      <Typography kind="paragraph">
        <LinkText href={Constants.github}>See more at my Github</LinkText>
      </Typography>
    </Dialog>
  )
}

const Spacer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`
