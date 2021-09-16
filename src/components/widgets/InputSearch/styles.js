import { InputStyles } from "components/styleComponents/styleInput"
import styled from "styled-components"
import search from "assets/icons/search.svg"
import { colors, spacing } from "styles"
export const Input = styled(InputStyles)`
  border-top-left-radius: ${spacing.none};
  border-bottom-left-radius: ${spacing.none};
  border: none;
  outline: none;
  background: ${colors.gray2}35;
  &:focus {
    border: none;
    box-shadow: 0 0 0 0 ${colors.gray3};
  }
  &:disabled {
    color: ${colors.gray2};
    border: none;
  }
  &::placeholder {
    color: ${colors.gray3};
  }
`
export const Icon = styled.label`
  width: 42px;
  height: 42px;
  border-top-left-radius: ${spacing.medium};
  border-bottom-left-radius: ${spacing.medium};
  background-color: ${colors.gray2}35;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: center;
  /* margin-right: -1px; */
  cursor: pointer;
  /* border: 1px solid ${colors.gray1}; */
`
export const Container = styled.div`
  display: flex;
  width: 100%;
`
