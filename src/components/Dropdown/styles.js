import styled from "styled-components"
import { border, colors, fontSize, spacing } from "styles"

export const Container = styled.div`
  position: relative;
`

export const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 220px;
  padding: ${spacing.medium};
  border-radius: 24px;
  background-color: ${colors.accent};
  color: ${colors.white};
  cursor: pointer;
  & p {
    font-size: ${fontSize.small};
    margin: 0 ${spacing.small};
  }
`
export const ContainerOptions = styled.div`
  position: absolute;
  top: 42px;
  left: 0px;
  width: fit-content;
  height: fit-content;
  border-radius: ${border.medium};
  border: 1px solid ${colors.gray2};
  overflow: hidden;
  z-index: 2;
`
export const Option = styled.div`
  display: flex;
  align-items: center;
  height: 42px;
  width: 220px;
  padding: 0 16px;
  cursor: pointer;
  color: ${colors.black};
  background-color: ${colors.white};
  font-size: ${fontSize.medium};

  &:hover {
    background-color: ${colors.secondary};
    color: ${colors.white};
  }
`
