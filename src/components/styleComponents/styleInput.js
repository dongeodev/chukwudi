import styled from "styled-components"
import { colors, spacing } from "styles"

export const InputStyles = styled.input`
  max-width: ${(props) => props.width || "100%"};
  width: 100%;
  height: 42px;
  border-radius: ${spacing.medium};
  padding-left: 16px;
  font-size: 14px;
  letter-spacing: 0.14px;
  color: ${colors.black};
  border: 1px solid ${colors.gray1};
  outline: none;
  background: ${colors.gray2};
  &:focus {
    border: none;
    box-shadow: 0 0 0 1px ${colors.gray3};
  }
  &:disabled {
    color: ${colors.gray2};
    border: 1px solid ${colors.gray2};
  }
  &::placeholder {
    color: ${colors.gray3};
  }
`
