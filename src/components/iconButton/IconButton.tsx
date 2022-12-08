import styled from 'styled-components'

const SIZE = 64

export const IconButton = styled.button.attrs(() => ({ type: 'button' }))`
  cursor: pointer;
  width: ${SIZE}px;
  min-width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: ${SIZE / 2}px;
  border: 3px solid ${({ theme }) => theme.colors.white100};
  outline: none;
  box-shadow: ${({ theme }) => theme.shadows.md};
  background-color: ${({ theme }) => theme.colors.black100};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.white100};
  transition: ${({ theme }) => theme.transition.default};

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.gold};
  }

  &:active {
    color: ${({ theme }) => theme.colors.gold};
  }
`
