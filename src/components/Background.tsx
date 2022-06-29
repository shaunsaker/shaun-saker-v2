import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import { getRandomFloat } from '../utils/getRandomFloat'
import { shuffleArray } from '../utils/shuffleArray'
import { LIKES_ICONS } from './icons'

const RANDOMISED_ICONS = shuffleArray(LIKES_ICONS)
const MIN_ICON_SCALE = 0.25
const MAX_ICON_SCALE = 0.9
const MIN_ICON_ANIMATION_DURATION = 2.5
const MAX_ICON_ANIMATION_DURATION = 5

/*
 * Display a list of static icons randomly in a 4x4 grid
 * that covers the container width and height
 */
export const Background = () => {
  return (
    <Container>
      {RANDOMISED_ICONS.map(Icon => {
        const scale = getRandomFloat(MIN_ICON_SCALE, MAX_ICON_SCALE)
        const animationDuration = getRandomFloat(
          MIN_ICON_ANIMATION_DURATION,
          MAX_ICON_ANIMATION_DURATION,
        )

        return (
          <IconContainer
            key={Icon.name}
            style={{
              animationDuration: `${animationDuration}s`,
            }}
          >
            <Icon
              width="100%"
              height="100%"
              style={{ color: `${theme.colors.accent}`, transform: `scale(${scale})` }}
            />
          </IconContainer>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 25%;
  padding: ${({ theme }) => theme.rhythm.lg}px;
  animation-name: animate;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  @keyframes animate {
    from {
      opacity: 0;
      transform: translateX(-10px) translateY(-10px);
    }
    to {
      opacity: 0.67;
      transform: translateX(10px) translateY(10px);
    }
  }
`
