import * as React from 'react'
import styled from 'styled-components'
import { Page } from '../../components/page/Page'
import { Tooltip } from '../../components/tooltip/Tooltip'
import Background from '../../images/background.png'

interface HomeProps {}

export const Home = ({}: HomeProps): React.ReactElement => {
  return (
    <Page>
      <BackgroundImage />

      <ContentContainer>
        <ShoutoutContainer>
          <Tooltip title="Ello Gov'na" size="lg" open>
            <div />
          </Tooltip>
        </ShoutoutContainer>
      </ContentContainer>
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

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const ShoutoutContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
`
