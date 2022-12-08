import { DefaultTheme } from 'styled-components'

const BLACK_50 = 'rgba(1, 0, 9, 0.5)'

export const theme: DefaultTheme = {
  colors: {
    gold: '#FEE048',
    black50: BLACK_50,
    black100: '#010009',
    white100: '#FFFFFF',
  },
  spacing: {
    sm: 8,
    md: 16,
    lg: 32,
  },
  radius: {
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
