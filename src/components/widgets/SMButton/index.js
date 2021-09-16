import React from "react"
import { Button, Span } from "./styles"

export const SMButton = ({
  handleClick,
  text,
  img,
  disabled = false,
  background,
}) => {
  return (
    <Button onClick={handleClick} disabled={disabled} background={background}>
      <img src={img} alt="gmail" width="20px" height="20px" />
      <Span>{text}</Span>
    </Button>
  )
}
