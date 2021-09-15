import Clock from "components/widgets/Clock"
import React from "react"
import { colors } from "styles"
import { Button, Container, Figure, Section, Time } from "./style"

function CardAddress() {
  return (
    <Section>
      <Container>
        <p>625 St Marks Ave</p>
        <Button>Edit</Button>
      </Container>
      <Container>
        <Time>
          <Figure>
            <Clock width="16px" height="16px" fill={colors.secondary} />
          </Figure>
          <span>35min</span>
        </Time>
        <Button>Choose time</Button>
      </Container>
    </Section>
  )
}

export default CardAddress
