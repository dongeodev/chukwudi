import React from "react"
import {
  Section,
  UserContainer,
  Span,
  H2,
  ProductsContainer,
  ButtonContainer,
  Overlay,
} from "./styles"
import user from "assets/icons/user.svg"
import CardAddress from "components/CardAddress"
import ItemCart from "components/ItemCart"
import ItemCartDelivery from "components/ItemCartDelivery"
import Total from "components/Total"
import ButtonGroup from "components/widgets/ButtonGroup"
import ButtonCheckout from "components/widgets/ButtonCheckout"
import CloseButton from "components/widgets/CloseButton"
import { colors } from "styles"
function Cart({ hide, show }) {
  return (
    <>
      {show && <Overlay onClick={hide}></Overlay>}
      <Section show={show}>
        <UserContainer>
          <CloseButton color={colors.black} onClick={hide} />
          <div>
            <img src={user} alt="user" width="16px" height="16px" />
            <Span>0</Span>
          </div>
        </UserContainer>
        <H2>My 😎 Order</H2>
        <CardAddress />
        <ProductsContainer>
          {[1, 2, 3, 4, 5].map((item) => (
            <ItemCart />
          ))}
          <ItemCartDelivery />
        </ProductsContainer>
        <Total />
        <ButtonContainer>
          <div>
            <p>Persons</p>
            <ButtonGroup />
          </div>
          <ButtonCheckout text="Checkout" width="120px" />
        </ButtonContainer>
      </Section>
    </>
  )
}

export default Cart
