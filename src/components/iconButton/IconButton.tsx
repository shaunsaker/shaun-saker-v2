import styled from 'styled-components'

const SIZE = 64
const SMALL_SIZE = 48

export const IconButton = styled.button`
  cursor: pointer;
  width: ${SIZE}px;
  min-width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.colors.white100};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: ${SMALL_SIZE}px;
    min-width: ${SMALL_SIZE}px;
    height: ${SMALL_SIZE}px;
    font-size: 24px;
  }
`
