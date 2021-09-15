import { ButtonTransparent } from "components/styleComponents/styleButtonTransparent"
import styled from "styled-components"
import { border, colors, spacing } from "styles"

export const Section = styled.section`
  width: 210px;
  min-height: 70px;
  height: fit-content;
  padding: ${spacing.large};
  border-radius: ${border.medium};
  background-color: ${colors.primary};
  & div:nth-child(2) {
    margin: 0;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacing.medium};
  color: ${colors.gray2};
`
export const Time = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.gray2};
`
export const Figure = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background-color: ${colors.secondary}24;
  border-radius: ${border.small};
  margin-right: ${spacing.small};
`
export const Button = styled(ButtonTransparent)`
  color: ${colors.secondary};
  width: fit-content;
  height: fit-content;
`
