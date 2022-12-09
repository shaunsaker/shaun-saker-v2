import styled from 'styled-components'

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black100};
  position: relative;
  display: flex;
  flex-direction: column;
`
