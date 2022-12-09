import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Chip } from '../../components/chip/Chip'
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

      <Typography kind="paragraph">{description}</Typography>

      <SkillsContainer>
        {skills.map(skill => (
          <Chip key={skill}>{skill}</Chip>
        ))}
      </SkillsContainer>
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

const SkillsContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md}px;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm}px;
`
