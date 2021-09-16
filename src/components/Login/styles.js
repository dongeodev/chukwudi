import styled from "styled-components"
import { border, colors, spacing } from "styles"
import { H1Desktop } from "styles"
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  max-width: 310px;
  margin: 80px auto 0 auto;
  padding: ${spacing.medium};
  background-color: ${colors.white};
  border-radius: ${border.medium};
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.1);

  & button {
    margin-bottom: ${spacing.medium};
  }
`
export const H1 = styled(H1Desktop)`
  margin-bottom: ${spacing.medium};
`
