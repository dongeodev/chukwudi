import React from "react"
import { Container, Label, Text } from "./styles"

function Total({ total = 5.95 }) {
  return (
    <Container>
      <Text>Total</Text>
      <Label>${total}</Label>
    </Container>
  )
}

export default Total
