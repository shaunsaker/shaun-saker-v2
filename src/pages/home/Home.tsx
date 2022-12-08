import * as React from 'react'
import styled from 'styled-components'
import { Page } from '../../components/page/Page'
import Background from '../../images/background.png'

interface HomeProps {}

export const Home = ({}: HomeProps): React.ReactElement => {
  return (
    <Page>
      <BackgroundImage />
    </Page>
  )
}

const BackgroundImage = styled.div`
  position: fixed;
  inset: 0;
  background-image: url(${Background});
  background-size: cover;
  background-position: center center;
`
