import styled from "styled-components"
import { colors, spacing } from "styles"

export const ButtonTransparent = styled.button`
  display: flex;
  align-items: center;
  height: ${(props) => props.height || "48px"};
  width: 100%;
  max-width: ${(props) => props.width || "100%"};
  background-color: transparent;
  color: ${(props) => props.color || colors.accent};
  font-size: 1.2rem;
  cursor: pointer;
  & p {
    font-size: 1.2rem;
  }
  & svg {
    margin-left: ${spacing.small};
  }
`
