import styled from "styled-components"
import { breakpoints, colors } from "styles"

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 250px;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.background || "transparent"};
  border: 1px solid ${colors.gray2};
  @media (min-width: ${breakpoints["tablet-medium"]}px) {
    max-width: 330px;
    height: 48px;
  }
`
export const Span = styled.span`
  font-size: 1.6rem;
  margin-left: 16px;
  color: ${colors.gray2};
  @media (min-width: ${breakpoints["tablet-medium"]}px) {
    font-size: 1.8rem;
  }
`
