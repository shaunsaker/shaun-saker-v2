import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      tertiary: string
      accent: string
      primaryText: string
      secondaryText: string
      grey: string
      lightGrey: string
      transBlack: string
      transWhite: string
    }
    rhythm: {
      sm: number
      md: number
      lg: number
    }
  }
}
