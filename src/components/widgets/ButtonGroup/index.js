import React, { useState } from "react"
import { Button, Container, Input } from "./styles"

function ButtonGroup() {
  const [count, setCount] = useState(1)
  const handleChange = (e) => {
    e.preventDefault()
    setCount(e.target.value)
  }

  return (
    <Container>
      <Button type="button" onClick={() => setCount((prev) => prev - 1)}>
        -
      </Button>
      <Input type="number" value={count} onChange={handleChange} />
      <Button type="button" onClick={() => setCount((prev) => prev + 1)}>
        +
      </Button>
    </Container>
  )
}

export default ButtonGroup
