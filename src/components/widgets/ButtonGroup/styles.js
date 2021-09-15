import styled from "styled-components"
import { border, colors, fontSize } from "styles"

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: ${border.small};
  border: 1px solid ${colors.gray2};
`

export const Button = styled.button`
  color: ${colors.black};
  font-size: ${fontSize.xSmall};
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
