import React from "react"

import { Container, H2 } from "./styles"
function Title({ title, icon }) {
  return (
    <Container>
      <H2>{title}</H2>
      <img src={icon} alt={title} width="30px" height="30px" />
    </Container>
  )
}

export default Title
