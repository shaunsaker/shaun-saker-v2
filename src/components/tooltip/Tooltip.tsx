import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import React from 'react'
import styled, { css } from 'styled-components'
import { Typography, TypographyKind } from '../typography/Typography'

type Size = 'md' | 'lg'

const mapSizeToTypographyKind: Record<Size, TypographyKind> = {
  lg: 'title',
  md: 'heading',
}

type TooltipProps = {
  title: React.ReactNode
} & StyledTooltipContentProps &
  TooltipPrimitive.TooltipProps

export const Tooltip = ({ title, size, children, ...props }: TooltipProps): React.ReactElement => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root delayDuration={0} {...props}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

        <StyledTooltipContent size={size}>
          <Typography kind={mapSizeToTypographyKind[size]}>{title}</Typography>

          <StyledTooltipArrow />
        </StyledTooltipContent>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

const sizeToCssMap: Record<Size, ReturnType<typeof css>> = {
  md: css`
    border-radius: ${({ theme }) => theme.radius.md}px;
    padding: ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.md}px;
  `,
  lg: css`
    border-radius: ${({ theme }) => theme.radius.lg}px;
    padding: ${({ theme }) => theme.spacing.md}px ${({ theme }) => theme.spacing.lg}px;
  `,
}

type StyledTooltipContentProps = {
  size: Size
}

const StyledTooltipContent = styled(TooltipPrimitive.Content)<StyledTooltipContentProps>`
  box-shadow: ${({ theme }) => theme.shadows.md};
  background-color: ${({ theme }) => theme.colors.black100};
  ${({ size }) => sizeToCssMap[size]};
  border-radius: ${({ theme }) => theme.radius.lg}px;
  padding: ${({ theme }) => theme.spacing.md}px ${({ theme }) => theme.spacing.lg}px;
`

const StyledTooltipArrow = styled(TooltipPrimitive.Arrow)`
  width: 32px;
  height: 16px;
  fill: ${({ theme }) => theme.colors.black100};
`
