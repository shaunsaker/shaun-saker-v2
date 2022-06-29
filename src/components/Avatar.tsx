import React from 'react'
import styled from 'styled-components'
import avatarImage from '../images/avatar.png'

export const Avatar = () => {
  return <Image src={avatarImage} alt="Shaun Saker's Avatar" />
}

const SIZE = 120

const Image = styled.img`
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: ${SIZE / 2}px;
  border: 2px solid ${({ theme }) => theme.colors.transWhite};
`
