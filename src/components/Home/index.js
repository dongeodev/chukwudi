import React from "react"
import menu from "assets/icons/menu.svg"
import InputSearch from "components/widgets/InputSearch"
import Header from "components/Header"
import Title from "components/Title"
import Dropdown from "components/Dropdown"
import {
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
function Home() {
  return (
    <Main>
      <Container>
        <img src={menu} alt="menu" width="26px" height="26px" />
        <h2>Chukwudi</h2>
        <InputSearch />
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
  )
}

export default Home
