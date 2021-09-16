import styled, { css } from "styled-components"
import { border, breakpoints, colors, fontSize, spacing } from "styles"

export const Section = styled.section`
  min-width: 300px;
  height: 100%;
  padding: 38px 0 38px 24px;
  background-color: ${colors.gray2}35;
  border-left: ${colors.gray2};
  z-index: 3;
  margin-bottom: 24px;
  @media (max-width: ${breakpoints["tablet-medium"]}px) {
    /* width: 300px; */
    position: fixed;
    right: -1000px;
    transition: right 0.5s;
    ${(props) =>
      props.show &&
      css`
        position: absolute;
        background-color: ${colors.gray1};
        right: 0;
      `}
  }
`
export const UserContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 24px;
  margin-bottom: ${spacing.xlarge};
  & button {
    display: none;
  }
  & div {
    display: flex;
    align-items: center;
  }
  @media (max-width: ${breakpoints["tablet-medium"]}px) {
    justify-content: space-between;
    & button {
      display: block;
      cursor: pointer;
    }
  }
`
export const Span = styled.span`
  width: 30px;
  height: 30px;
  margin-left: ${spacing.large};
  border-radius: ${border.small};
  background-color: ${colors.secondary};
  font-size: ${fontSize.small};
  text-align: center;
  line-height: 30px;
`
export const H2 = styled.h2`
  width: 58px;
  font-size: ${fontSize.large};
  margin-bottom: ${spacing.xlarge};
`
export const ProductsContainer = styled.div`
  margin-top: 60px;
  padding-right: 24px;
  min-height: 200px;
  & article {
    margin-bottom: ${spacing.large};
  }
  & article:nth-child(-1) {
    margin-bottom: ${spacing.none};
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: ${spacing.large};

  & div > p {
    margin-bottom: ${spacing.small};
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #00000031;
  z-index: 2;
`
