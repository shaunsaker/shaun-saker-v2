import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Dialog } from '../../components/dialog/Dialog'
import { LinkText } from '../../components/typography/LinkText'
import { Typography } from '../../components/typography/Typography'
import { Constants } from '../../constants'
import { GO_BACK } from '../../Router'

interface ProjectsProps {}

export const Projects = ({}: ProjectsProps): React.ReactElement => {
  const navigate = useNavigate()

  const onDialogClose = useCallback(() => {
    navigate(GO_BACK)
  }, [navigate])

  return (
    <Dialog title="Projects" open onOpenChange={onDialogClose}>
      <Section>
        <HeadingText kind="heading">Timeular</HeadingText>

        <Typography kind="paragraph">
          For the past 3 years I've worked with a small team as a Frontend Developer to develop a
          clever time-tracking solution, <LinkText href="http://timeular.com/">Timeular</LinkText>,
          popular in the US and Germany.
          <br />
          <br />
          Tech used: React, React-Native and Electron.
        </Typography>
      </Section>

      <Section>
        <HeadingText kind="heading">Scinapse</HeadingText>

        <Typography kind="paragraph">
          For ~2 years, I was the lead engineer on a project for one of the biggest hospitals in
          South Africa. At <LinkText href="https://aux.studio/">AUX Studio</LinkText>, we developed
          a mobile and web app to help them go paperless at their sporting events.
          <br />
          <br />
          Tech used: React, React-Native and Firebase.
        </Typography>
      </Section>

      <Section>
        <HeadingText kind="heading">Daily Bitcoin Lottery</HeadingText>

        <Typography kind="paragraph">
          One of my favourite{' '}
          <LinkText href="https://github.com/shaunsaker/dbl-web-app">personal projects</LinkText>, I
          created a lottery on the Bitcoin blockchain (it's the TODO app of 2022 okay 😂). This was
          a huge learning curve for me as it involved a lot of research into a very unknown
          territory. In the end, I discovered Ethereum Smart Contracts, which prompted me to
          complete a full course in{' '}
          <LinkText href="https://www.youtube.com/watch?v=gyMwXuJrbJQ">
            Blockchain, Solidity and Full Stack Web3 development
          </LinkText>
          .
          <br />
          <br />
          Tech used: Typescript, React, React-Native, Firebase and the Bitcoin blockchain.
        </Typography>
      </Section>

      <Section>
        <HeadingText kind="heading">Fat Buck</HeadingText>

        <Typography kind="paragraph">
          Another crypto-based{' '}
          <LinkText href="https://github.com/shaunsaker/fat-buck-mobile">personal project</LinkText>
          , Fat Buck was{' '}
          <LinkText href="https://github.com/shaunsaker/fat-buck-mobile-old">originally</LinkText>{' '}
          created to analyse stocks on the NYSE, JSE and Australian stock market using{' '}
          <LinkText href="https://www.investopedia.com/terms/b/bengraham.asp">
            Benjamin Graham's value investing technique
          </LinkText>
          . After realising that everything on the market was significantly overvalued, I pivoted to
          a crypto trading bot (naturally 😂). After a year of usage, I broke even lol.
          <br />
          <br />
          Tech used: Typescript, React, React-Native, Python and Firebase.
        </Typography>
      </Section>

      <Section>
        <HeadingText kind="heading">Recycled Filament</HeadingText>

        <Typography kind="paragraph">
          Before leaving South Africa, I took on an (overly) ambitious project, turning recyclable
          plastic into 3D printer filament PLA. This was a huge project and involved a bit of
          everything, 3D design and printing, electronics, mechanical engineering and coding of
          course. I got as far as ordering all the parts and built the{' '}
          <LinkText href="https://www.thingiverse.com/thing:4845503">filament puller unit</LinkText>
          . After receiving our Australian visa, I had to handover the reigns to someone else. It
          was good fun though!
          <br />
          <br />
          Tech used: Fusion 360, 3D Printer and Arduino.
        </Typography>
      </Section>

      <Section>
        <HeadingText kind="heading">Launchasaur</HeadingText>

        <Typography kind="paragraph">
          Before I started using a Macbook and discovered Shortcuts (Windows meh), I created a{' '}
          <LinkText href="https://github.com/shaunsaker/launchasaur">
            cross-platform Electron app
          </LinkText>
          that would allow me to trigger multiple open/close apps/files/links actions at once, e.g.
          Open Spotify, Open VSCode, Open Terminus, Open Calendar, Open Email in one action.
          <br />
          <br />
          Tech used: Typescript, React, Electron and Firebase.
        </Typography>
      </Section>

      <Section>
        <HeadingText kind="heading">Nou Braai</HeadingText>

        <Typography kind="paragraph">
          <LinkText href="https://github.com/shaunsaker/nou-braai">A mobile app</LinkText> that
          connects to my home-made bluetooth temperature sensor (to be used in "braaing" aka cooking
          on fire because yolo) 🔥
          <br />
          <br />
          Tech used: Typescript, React-Native and Bluetooth.
        </Typography>
      </Section>

      <Section>
        <HeadingText kind="heading">Bloutand</HeadingText>

        <Typography kind="paragraph">
          <LinkText href="https://github.com/shaunsaker/bloutand">An Electron app</LinkText> that
          can scan for nearby BLE devices, connect/disconnect to them and read and display battery
          level values from the connected device 🔵🦷
          <br />
          <br />
          Tech used: React, React-Native and Firebase.
        </Typography>
      </Section>

      <Section>
        <HeadingText kind="heading">Aisle 5</HeadingText>

        <Typography kind="paragraph">
          <LinkText href="https://github.com/shaunsaker/aisle-5-v2">A mobile app</LinkText> that
          predicts your grocery usage the more you use it, no more shopping lists! WIP.
          <br />
          <br />
          Tech used: Typescript, React-Native and Firebase.
        </Typography>
      </Section>

      <Section>
        <HeadingText kind="heading">CVD19ZA</HeadingText>

        <Typography kind="paragraph">
          <LinkText href="https://github.com/shaunsaker/covid-19-south-africa-app">
            A mobile app
          </LinkText>{' '}
          that provided automatically notified users of new COVID stats in South Africa (it was such
          a hot topic back then 😉).
          <br />
          <br />
          Tech used: React-Native and Firebase.
        </Typography>
      </Section>

      <Section>
        <HeadingText kind="heading">WineMe</HeadingText>

        <Typography kind="paragraph">
          <LinkText href="https://github.com/shaunsaker/wine-me">A mobile app</LinkText> that helps
          you to find the next best wine farm that you haven't visited, closest to you!
          <br />
          <br />
          Tech used: React-Native and Firebase.
        </Typography>
      </Section>

      <Typography kind="paragraph">
        <LinkText href={Constants.github}>See more at my Github</LinkText>
      </Typography>
    </Dialog>
  )
}

const Section = styled.section`
  padding-bottom: ${({ theme }) => theme.spacing.md}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white20};
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`

const HeadingText = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`
