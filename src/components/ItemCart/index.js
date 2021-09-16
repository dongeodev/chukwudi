import React, { useEffect } from "react"
import { Article, Container, Figure, Input, Label, Span } from "./styles"

function ItemCart({ image, name, price, id, register, setValue, watch }) {
  useEffect(() => {
    setValue(name, 1)
  }, [])
  // console.log({ ...register(name) })
  return (
    <Article>
      <Container>
        <Figure>
          <img src={image} width="60px" height="30px" alt={name} />
        </Figure>
        <Input type="number" {...register(name)} />
        <Span>x</Span>
        <Span>{name}</Span>
      </Container>
      <Label>${price}</Label>
    </Article>
  )
}

export default ItemCart
