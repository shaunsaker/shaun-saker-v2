import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      gold: string
      black100: string
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
  }
}
