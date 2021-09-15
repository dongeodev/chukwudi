import React, { useState } from "react"
import { Button, Container, Input } from "./styles"

function ButtonGroup() {
  const [count, setCount] = useState(1)
  return (
    <Container>
      <Button onClick={() => setCount((prev) => prev - 1)}>-</Button>
      <Input value={count} />
      <Button onClick={() => setCount((prev) => prev + 1)}>+</Button>
    </Container>
  )
}

export default ButtonGroup
