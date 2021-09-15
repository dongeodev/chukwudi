import React from "react"
import Arrow from "../Arrow"

import { Button } from "./styles"

function ButtonCheckout({
  text,
  width,
  height,
  color,
  onClick,
  type,
  disabled,
  background,
} = {}) {
  return (
    <Button
      onClick={onClick}
      type={type}
      width={width}
      height={height}
      color={color}
      disabled={disabled}
      background={background}
    >
      {text}
      <Arrow width="16px" />
    </Button>
  )
}

export default ButtonCheckout
