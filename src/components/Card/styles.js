import { ButtonTransparent } from "components/styleComponents/styleButtonTransparent"
import styled from "styled-components"
import { border, colors, fontSize, spacing } from "styles"

export const Article = styled.article`
  width: 250px;
  min-width: 250px;
  height: 240px;
  margin-bottom: ${spacing.medium};
  /* background-color: ${colors.white}; */
  overflow: hidden;
`
export const ContainerImage = styled.div`
  border-radius: ${border.medium};
  position: relative;
  width: 100%;
  height: 140px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
`
export const Time = styled.span`
  position: absolute;
  bottom: 0;
  border-top-right-radius: ${border.small};
  padding: ${spacing.small};
  font-size: ${fontSize.xSmall};
  font-weight: 700;
  background-color: ${colors.gray1};
`
export const ContainerDescription = styled.div`
  width: 100%;
  margin-top: ${spacing.medium};

  & h2 {
    height: 22px;
    font-size: ${fontSize.medium};
    font-weight: 500;
    margin-bottom: ${spacing.small};
    overflow-y: auto;
  }
`
export const Info = styled.div`
  width: 100%;
  margin-top: ${spacing.medium};
  & img {
    margin-right: ${spacing.xSmall};
  }
  & span {
    position: relative;
    font-size: ${fontSize.small};
    font-weight: 500;
    margin-right: ${spacing.medium};
  }
  & span:nth-child(3)::after,
  span:nth-child(4)::after {
    position: absolute;
    content: " ";
    top: 50%;
    right: -10px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: ${colors.gray2};
  }
`
export const Span = styled.span`
  color: ${colors.gray2};
`
export const Button = styled(ButtonTransparent)`
  color: ${colors.primary};
  margin-top: ${spacing.small};
  &:disabled {
    color: ${colors.gray2};
    cursor: not-allowed;
  }
`
