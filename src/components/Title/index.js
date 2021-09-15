import React from "react"
import hamburger from "assets/icons/hamburger.svg"
import { Container, H2 } from "./styles"
function Title({ title }) {
  return (
    <Container>
      <H2>{title}</H2>
      <img src={hamburger} alt="hamburger" width="30px" height="30px" />
    </Container>
  )
}

export default Title
