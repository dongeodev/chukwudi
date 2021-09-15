import React from "react"
import { Article, Figure, Input, Label, Span } from "./styles"

function ItemCart({ img, name, register }) {
  return (
    <Article>
      <Figure>
        <img
          src={
            "https://images.pexels.com/photos/156114/pexels-photo-156114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440"
          }
          width="60px"
          height="30px"
          alt={name}
        />
      </Figure>
      <Input type="number" {...register(name)} />
      <Span>x</Span>
      <Span>Beach BBQBurger</Span>
      <Label>$14.99</Label>
    </Article>
  )
}

export default ItemCart
