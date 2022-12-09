import { DefaultTheme } from 'styled-components'

const BLACK_50 = 'rgba(1, 0, 9, 0.5)'

export const theme: DefaultTheme = {
  colors: {
    gold: '#FEE048',
    black50: BLACK_50,
    black80: 'rgba(1, 0, 9, 0.8)',
    black100: '#010009',
    white20: 'rgba(255, 255, 255, 0.2)',
    white60: 'rgba(255, 255, 255, 0.6)',
    white100: '#FFFFFF',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 16,
  },
  shadows: {
    md: `0px 4px 4px 0px ${BLACK_50}`,
  },
  transition: {
    default: '0.167s all ease-out',
  },
  breakpoints: {
    mobile: 425,
  },
}
