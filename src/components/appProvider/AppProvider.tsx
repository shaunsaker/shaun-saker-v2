import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../styles/globalStyles'
import { theme } from '../../styles/theme'

interface AppProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      {children}
    </ThemeProvider>
  )
}
