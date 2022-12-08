import styled, { css } from 'styled-components'
import '@fontsource/knewave'
import '@fontsource/inter'

export type TypographyKind = 'title' | 'heading' | 'paragraph' | 'small'

const kindToCssMap: Record<TypographyKind, ReturnType<typeof css>> = {
  title: css`
    font-family: Knewave;
    font-size: 64px;
    line-height: 64px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white100};
  `,
  heading: css`
    font-family: Knewave;
    font-size: 32px;
    line-height: 32px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white100};
  `,
  paragraph: css`
    font-family: Inter;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white100};
  `,
  small: css`
    font-family: Inter;
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white100};
  `,
}

export const Typography = styled.div<{
  kind: TypographyKind
}>`
  ${({ kind }) => kindToCssMap[kind]}
`
