import styled from "styled-components"
import { colors, fontSize, spacing } from "styles"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: ${spacing.medium};
  border-bottom: 1px solid ${colors.gray2};
  margin-top: 80px;
  padding-right: 24px;
`
export const Text = styled.p`
  font-size: ${fontSize.large};
  font-weight: 600;
`
export const Label = styled.label`
  font-size: ${fontSize.big};
  font-weight: 600;
`
