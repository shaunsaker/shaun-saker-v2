import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      gold: string
      black50: string
      black80: string
      black100: string
      white20: string
      white60: string
      white100: string
    }
    spacing: {
      sm: number
      md: number
      lg: number
    }
    radius: {
      md: number
      lg: number
    }
    shadows: {
      md: string
    }
    transition: {
      default: string
    }
    breakpoints: {
      mobile: number
    }
  }
}
