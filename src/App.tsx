import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Avatar } from './components/Avatar'
import { Background } from './components/Background'
import { ContactLinks } from './components/ContactLinks'
import { GlobalStyles } from './styles/globalStyles'
import { theme } from './styles/theme'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />

        <Background />

        <ContentContainer>
          <Avatar />

          <TitleText>Hi, I'm Shaun Saker 👋</TitleText>

          <DescriptionText>
            I love building and automating for mobile, desktop and web.
          </DescriptionText>

          <SmallTextContainer>
            <SmallText>⏳ Since 2016</SmallText>

            <SmallText>👨‍💻 Typescript, React, React-Native</SmallText>

            <SmallText>😍 Kids, cooking, running, gardening, exploring, music.</SmallText>
          </SmallTextContainer>

          <ContactLinks />
        </ContentContainer>
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

const ContentContainer = styled.div`
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.rhythm.lg}px;
`

const TitleText = styled.div`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 48px;
  line-height: 64px;
  color: ${({ theme }) => theme.colors.white};
  margin: ${({ theme }) => theme.rhythm.md}px 0;
  text-align: center;
`

const DescriptionText = styled.div`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.rhythm.md}px;
  text-align: center;
`

const SmallTextContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.rhythm.md}px;
`

const SmallText = styled.div`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.rhythm.sm}px;
  text-align: center;
`
