import React from "react"
import { Article, Container, Figure, Label, Span } from "./styles"
import truck from "assets/icons/truck.svg"
function ItemCartDelivery({ image, name }) {
  return (
    <Article>
      <Container>
        <Figure>
          <img src={truck} width="60px" height="30px" alt={name} />
        </Figure>
        <Span>Delivery</Span>
      </Container>
      <Label>$0</Label>
    </Article>
  )
}

export default ItemCartDelivery
