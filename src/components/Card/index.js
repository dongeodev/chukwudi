import React from "react"
import star from "assets/icons/star.svg"
import {
  Article,
  ContainerDescription,
  ContainerImage,
  Info,
  Span,
  Time,
} from "./styles"
function Card({
  name,
  time,
  qualification,
  price,
  image = "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
  id,
}) {
  return (
    <Article>
      <ContainerImage url={image}>
        <Time>{time}</Time>
      </ContainerImage>
      <ContainerDescription>
        <h2>{name}</h2>

        <Info>
          <img src={star} alt="rate" width="10px" />
          <span>{qualification}</span>
          <Span>Deli</Span>
          <Span>Bagels</Span>
          <Span>{price}$</Span>
        </Info>
      </ContainerDescription>
    </Article>
  )
}

export default Card
