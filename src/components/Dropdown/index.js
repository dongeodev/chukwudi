import Angle from "components/widgets/Angle"
import Clock from "components/widgets/Clock"
import React, { useState } from "react"
import { colors } from "styles"
import { Container, ContainerOptions, Option, Select } from "./styles"

function Dropdown() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState("Now")
  const handleOpen = () => {
    setOpen((prev) => !prev)
  }
  const handleSelect = (val) => {
    setSelected(val)
    setOpen((prev) => !prev)
  }
  return (
    <Container>
      <Select onClick={handleOpen}>
        <Clock fill={colors.white} width="16px" />
        <p>
          Delivery: <strong>{selected}</strong>
        </p>
        <Angle color={colors.white} open={open} />
      </Select>
      {open && (
        //esto usualmente es un map que rederiza todas las opciones dinamicamente
        <ContainerOptions>
          <Option onClick={() => handleSelect("Now")}>Now</Option>
          <Option onClick={() => handleSelect("Later")}>Later</Option>
          <Option onClick={() => handleSelect("On monday")}>On monday</Option>
        </ContainerOptions>
      )}
    </Container>
  )
}

export default Dropdown
