import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Typography } from '../../components/typography/Typography'

interface ProjectProps {
  title: ReactNode
  description: ReactNode
  skills: string[]
}

export const Project = ({ title, description, skills }: ProjectProps): React.ReactElement => {
  return (
    <Container>
      <HeadingText kind="heading">{title}</HeadingText>

      <Typography kind="paragraph">
        {description}
        <br />
        <br />
        Tech used: {skills.join(', ')}.
      </Typography>
    </Container>
  )
}

const Container = styled.section`
  padding-bottom: ${({ theme }) => theme.spacing.md}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white20};
`

const HeadingText = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`
