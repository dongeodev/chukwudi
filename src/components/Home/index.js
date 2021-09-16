import React, { useState } from "react"
import menu from "assets/icons/menu.svg"
import InputSearch from "components/widgets/InputSearch"
import Header from "components/Header"
import Title from "components/Title"
import Dropdown from "components/Dropdown"
import {
  HomeContainer,
  Container,
  ContainerTitle,
  ContainerCategories,
  ContainerProducts,
  Main,
} from "./styles"
import hamburger from "assets/icons/hamburger.svg"
import { categories } from "mocks/categories"
import Category from "components/Category"
import { products } from "mocks/products"
import Card from "components/Card"
import Cart from "components/Cart"
import CartButton from "components/widgets/CartButton"
function Home() {
  const [showCart, setShowCart] = useState(false)
  return (
    <HomeContainer>
      <Main>
        <Container>
          <img src={menu} alt="menu" width="26px" height="26px" />
          <h2>Chukwudi</h2>
          <InputSearch />
          <CartButton onClick={() => setShowCart((prev) => !prev)} />
        </Container>

        <Header />
        <ContainerTitle>
          <Title title="Restaurants" icon={hamburger} />
          <Dropdown />
        </ContainerTitle>
        <ContainerCategories>
          {categories.map((category) => (
            <Category {...category} key={category.id} />
          ))}
        </ContainerCategories>
        <ContainerProducts>
          {products.map((product) => (
            <Card {...product} />
          ))}
        </ContainerProducts>
      </Main>
      <Cart show={showCart} hide={() => setShowCart(false)} />
    </HomeContainer>
  )
}

export default Home
