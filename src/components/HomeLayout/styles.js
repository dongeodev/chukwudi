import styled from "styled-components"
import { breakpoints, colors, fontSize, spacing } from "styles"

export const HomeContainer = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: minmax(320px, 3.5fr) 1fr;
  @media (max-width: ${breakpoints["desktop-small"]}px) {
    grid-template-columns: minmax(320px, 3.5fr) 1.5fr;
  }
  @media (max-width: ${breakpoints["tablet-medium"]}px) {
    grid-template-columns: 1fr;
  }
`
export const Main = styled.main`
  height: 100%;
  /* max-width: 1105px; */
  /* margin: 0 auto; */
  padding: 38px;
  background-color: ${colors.gray1};
  @media (max-width: ${breakpoints["tablet-medium"]}px) {
    width: 100vw;
    padding: ${spacing.medium};
  }
`
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
  & Button {
    margin-left: ${spacing.medium};
    display: none;
    cursor: pointer;
    @media (max-width: ${breakpoints["tablet-medium"]}px) {
      display: block;
    }
  }
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
  }
`
export const ContainerCategories = styled.section`
  position: relative;
  display: grid;
  grid-template-rows: auto;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  grid-gap: ${spacing.large};
  overflow-x: auto;
  margin-bottom: ${spacing.xlarge};
  padding-bottom: ${spacing.medium};
  min-height: 100px;
  @media (max-width: ${breakpoints["tablet-medium"]}px) {
    /* grid-template-rows: 1fr;
    grid-auto-columns: auto;
    overflow-x: auto; */
  }
`
export const ContainerProducts = styled.section`
  position: relative;
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
  /* max-width: 100%; */
  margin-bottom: ${spacing.xlarge};
  /* padding-bottom: ${spacing.medium}; */
  & article {
    margin-right: ${spacing.medium};
  }
  & article:nth-child(-1) {
    margin-right: ${spacing.none};
  }
  @media (max-width: ${breakpoints["desktop-small"]}px) {
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  @media (max-width: ${breakpoints["tablet-medium"]}px) {
    max-width: 700px;
  }
`
