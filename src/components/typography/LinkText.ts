import styled from 'styled-components'

export const LinkText = styled.a.attrs(() => ({
  as: 'a',
  target: '_blank',
  rel: 'noopener noreferer',
}))`
  color: ${({ theme }) => theme.colors.gold};
`
