import styled from "styled-components"
import { border, colors, fontSize, spacing } from "styles"

export const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 250px;
  border-radius: ${border.small};
`
export const Container = styled.div`
  display: flex;
  align-items: center;
`
export const Figure = styled.div`
  margin-right: ${spacing.small};
  background-color: ${colors.secondary}24;
  & img {
    border-radius: ${border.xSmall};
  }
`

export const Span = styled.span`
  max-width: 95px;
  margin-right: ${spacing.small};
  font-size: ${fontSize.small};
  font-weight: 600;
`
export const Label = styled.label`
  color: ${colors.gray2};
  font-size: ${fontSize.small};
  font-weight: 600;
`
