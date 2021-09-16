import styled from "styled-components"
import { breakpoints, fontSize, spacing } from "styles"

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: ${spacing.xlarge};
  & h2 {
    font-size: ${fontSize.large};
    margin-right: ${spacing.xlarge};
    margin-left: ${spacing.medium};
  }
`
export const Main = styled.main`
  width: 100%;
  height: 100%;
  /* max-width: 1105px; */
  /* margin: 0 auto; */
  padding: 38px;
  background-color: lightblue;
`
export const ContainerTitle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${spacing.xlarge};
  margin-top: ${spacing.xlarge};
  @media (max-width: ${breakpoints["mobile-medium"]}px) {
    flex-direction: column;
    & div:nth-child(1) {
      margin-bottom: ${spacing.medium};
    }
  }
`
export const ContainerCategories = styled.section`
  display: grid;
  grid-template-rows: auto;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  grid-gap: ${spacing.large};
  overflow-x: auto;
  margin-bottom: ${spacing.xlarge};
  padding-bottom: ${spacing.medium};
  @media (max-width: ${breakpoints["tablet-medium"]}px) {
    /* grid-template-rows: 1fr;
    grid-auto-columns: auto;
    overflow-x: auto; */
  }
`
export const ContainerProducts = styled.section`
  display: grid;
  grid-template-columns: repeat(5, auto);

  gap: ${spacing.xlarge};

  margin-bottom: ${spacing.xlarge};
  padding-bottom: ${spacing.medium};
  @media (max-width: ${breakpoints["desktop-medium"]}px) {
    grid-template-columns: repeat(4, auto);
    overflow-x: auto;
  }
  @media (max-width: ${breakpoints["tablet-large"]}px) {
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: ${breakpoints["tablet-medium"]}px) {
    grid-auto-flow: column;
  }
`
