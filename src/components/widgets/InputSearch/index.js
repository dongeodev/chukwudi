import React from "react"
import { Container, Icon, Input } from "./styles"

function InputSearch({ name = "search", value, onChange }) {
  return (
    <Container>
      <Icon htmlFor={name}></Icon>
      <Input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Search"
      />
    </Container>
  )
}

export default InputSearch
