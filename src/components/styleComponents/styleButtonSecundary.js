import styled from "styled-components"
import { colors, spacing } from "styles"

export const ButtonSecundary = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height || "54px"};
  width: 100%;
  max-width: ${(props) => props.width || "100%"};
  background-color: ${colors.secondary};
  color: ${(props) => props.color || colors.black};
  font-size: 1.2rem;
  cursor: pointer;
  & p {
    font-size: 1.2rem;
  }
  & svg {
    margin-left: ${spacing.small};
  }
  &:hover {
    color: ${colors.primary};
  }
  &:disabled {
    color: ${colors.gray2};
    cursor: not-allowed;
  }
  &:disabled &:hover {
    color: ${colors.gray2};
    cursor: not-allowed;
  }
  &:focus {
    outline-style: none;
  }
`
