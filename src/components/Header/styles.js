import {
  border,
  breakpoints,
  colors,
  fontSize,
  H1Desktop,
  spacing,
} from "styles"
import styled from "styled-components"
import { ButtonTransparent } from "components/styleComponents/styleButtonTransparent"

export const Section = styled.section`
  position: relative;
  height: 200px;
  width: 100%;
  border-radius: ${border.medium};
  background-color: ${colors.background};
  @media (max-width: ${breakpoints["mobile-medium"]}px) {
    height: 350px;
    width: 100%;
    padding: 32px 16px;
  }
`
export const Figure = styled.div`
  position: absolute;
  bottom: 0;
  left: 30px;
  height: 220px;
  width: auto;
  & img {
    height: 220px;
    width: auto;
  }
  @media (max-width: ${breakpoints["mobile-small"]}px) {
    left: 0px;
    height: 220px;
  }
`
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-left: 350px;
  & p {
    font-size: ${fontSize.small};
    color: ${colors.gray2};
  }
  @media (max-width: ${breakpoints["tablet-large"]}px) {
    margin-left: 260px;
  }
  @media (max-width: ${breakpoints["mobile-medium"]}px) {
    margin: 0;
    justify-content: flex-start;
    align-items: center;
  }
`

export const ContainerTitle = styled.div`
  display: flex;
  margin-bottom: ${spacing.small};
`
export const Title = styled(H1Desktop)`
  color: ${colors.accent};
  margin-right: ${spacing.medium};
`
export const Button = styled(ButtonTransparent)`
  position: absolute;
  right: 30px;
  bottom: 15px;
  @media (max-width: ${breakpoints["mobile-small"]}px) {
    right: 30px;
    bottom: 150px;
  }
`
