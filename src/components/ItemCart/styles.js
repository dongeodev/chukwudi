import styled from "styled-components"
import { border, colors, fontSize, spacing } from "styles"

export const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 280px;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
`
export const Figure = styled.div`
  margin-right: ${spacing.small};
  & img {
    border-radius: ${border.xSmall};
  }
`
export const Input = styled.input`
  width: 20px;
  background-color: transparent;
  outline: none;
  border: none;
  font-size: ${fontSize.small};
  &:focus {
    outline: none;
    border: none;
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
