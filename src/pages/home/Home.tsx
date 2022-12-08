import * as React from 'react'
import styled from 'styled-components'
import { Page } from '../../components/page/Page'

interface HomeProps {}

export const Home = ({}: HomeProps): React.ReactElement => {
  return (
    <Page>
      <Container></Container>
    </Page>
  )
}

const Container = styled.div``
