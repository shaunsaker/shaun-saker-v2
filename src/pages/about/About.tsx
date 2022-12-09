import React from 'react'
import styled from 'styled-components'

interface AboutProps {}

export const About = ({}: AboutProps): React.ReactElement => {
  return <Container />
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background-color: red;
`
