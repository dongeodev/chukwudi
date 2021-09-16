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
import { useForm } from "react-hook-form"
function Cart({ hide, show, addedProducts }) {
  const { products } = addedProducts
  const { register, handleSubmit, watch, setValue } = useForm()
  const onSubmit = (data) => alert(JSON.stringify(data))
  const watchField = watch()
  let total = 0
  return (
    <>
      {show && <Overlay onClick={hide}></Overlay>}
      <Section show={show}>
        <UserContainer>
          <CloseButton color={colors.black} onClick={hide} />
          <div>
            <img src={user} alt="user" width="16px" height="16px" />
            <Span>{products.length}</Span>
          </div>
        </UserContainer>
        <H2>My 😎 Order</H2>
        <CardAddress />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ProductsContainer>
            {products.map((item) => {
              const price = item.price * Number(watchField[item.name])
              total += price
              return (
                <ItemCart
                  image={item.image}
                  name={item.name}
                  price={price}
                  register={register}
                  setValue={(name, val) => setValue(name, val)}
                  watch={watch}
                />
              )
            })}
            <ItemCartDelivery />
          </ProductsContainer>
          <Total total={total.toFixed(2)} />
          <ButtonContainer>
            <div>
              <p>Persons</p>
              <ButtonGroup />
            </div>
            <ButtonCheckout text="Checkout" width="120px" type="submit" />
          </ButtonContainer>
        </form>
      </Section>
    </>
  )
}

export default Cart
