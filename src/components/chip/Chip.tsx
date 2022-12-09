import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Typography } from '../typography/Typography'

type ChipProps = HTMLAttributes<HTMLDivElement>

export const Chip = ({ children, ...props }: ChipProps): React.ReactElement => {
  return (
    <Container {...props}>
      <Typography kind="small">{children}</Typography>
    </Container>
  )
}

const Container = styled.div`
  border-radius: ${({ theme }) => theme.radius.sm}px;
  background-color: ${({ theme }) => theme.colors.white20};
  padding: ${({ theme }) => theme.spacing.xs}px ${({ theme }) => theme.spacing.sm}px;
`
