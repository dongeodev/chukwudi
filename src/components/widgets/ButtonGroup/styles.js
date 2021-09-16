import styled from "styled-components"
import { border, colors, fontSize } from "styles"

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: ${border.small};
  border: 1px solid ${colors.gray2};
  width: fit-content;
`

export const Button = styled.button`
  width: 20px;
  height: 20px;
  color: ${colors.black};
  font-size: ${fontSize.medium};
`
export const Input = styled.input`
  width: 20px;
  background-color: transparent;
  outline: none;
  border: none;
  font-size: ${fontSize.small};
  padding-left: 5px;
  &:focus {
    outline: none;
    border: none;
  }
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
