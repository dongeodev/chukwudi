import React from "react"
import imgheader from "assets/images/headerimage.png"
import party from "assets/images/party.png"
import {
  Button,
  ContainerText,
  ContainerTitle,
  Figure,
  Section,
  Title,
} from "./styles"
import Arrow from "components/widgets/Arrow"
import { colors } from "styles"

function Header() {
  return (
    <Section>
      <Figure>
        <img src={imgheader} alt="header" />
      </Figure>
      <ContainerText>
        <ContainerTitle>
          <Title>$0 delivery for 30 days! </Title>
          <img src={party} alt="header" width="30px" height="30px" />
        </ContainerTitle>
        <p>$0 delivery fee for orders over $10 for 30 days</p>
      </ContainerText>
      <Button width="fit-content">
        <p>Learn more</p>
        <Arrow width="8px" color={colors.accent} />
      </Button>
    </Section>
  )
}

export default Header
