import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import styled from 'styled-components'
import { Typography } from '../typography/Typography'
import { CloseIcon } from '../icons/CloseIcon'
import { IconButton } from '../iconButton/IconButton'

type DialogProps = { title: string } & DialogPrimitive.DialogProps

export const Dialog = ({ title, children, ...props }: DialogProps): React.ReactElement => {
  return (
    <DialogPrimitive.Root {...props}>
      <StyledDialogOverlay>
        <StyledDialogContent>
          <HeaderContainer>
            <StyledDialogTitle>
              <Typography kind="title">{title}</Typography>
            </StyledDialogTitle>

            <DialogPrimitive.Close asChild>
              <IconButton>
                <CloseIcon />
              </IconButton>
            </DialogPrimitive.Close>
          </HeaderContainer>

          <ContentContainer>{children}</ContentContainer>
        </StyledDialogContent>
      </StyledDialogOverlay>
    </DialogPrimitive.Root>
  )
}

const StyledDialogOverlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.black80};
  padding: ${({ theme }) => theme.spacing.lg}px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledDialogContent = styled(DialogPrimitive.Content)`
  max-width: 560px;
  width: 100%;
  max-height: calc(100vh - ${({ theme }) => theme.spacing.lg}px);
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.lg}px;
  border: 4px solid ${({ theme }) => theme.colors.gold};
  box-shadow: ${({ theme }) => theme.shadows.md};
  background-color: ${({ theme }) => theme.colors.black100};
  padding: ${({ theme }) => theme.spacing.lg}px;
  display: flex;
  flex-direction: column;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`

const StyledDialogTitle = styled(DialogPrimitive.Title)`
  all: unset;
`

const ContentContainer = styled.div`
  overflow-y: auto;
`
