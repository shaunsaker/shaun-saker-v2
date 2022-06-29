import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Background } from './components/Background'
import { GlobalStyles } from './styles/globalStyles'
import { theme } from './styles/theme'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />

        <Background />
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.div``
