import React, { useEffect, useState } from "react"
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
// import { categories } from "mocks/categories"
import Category from "components/Category"
// import { products } from "mocks/products"
import Card from "components/Card"
import Cart from "components/Cart"
import CartButton from "components/widgets/CartButton"
import { add_products } from "actions"
import Spinner from "components/widgets/Spinner"
function HomeLayout({
  addedProducts,
  dispatchProducts,
  user,
  setUser,
  categories = [],
  fetchingCategories,
  products = [],
  fetchingProducts,
}) {
  const [showCart, setShowCart] = useState(false)
  const [productList, setProductList] = useState(products)
  const [categorySelected, setCategorySelected] = useState(1)
  useEffect(() => {
    setProductList(products)
    if (categorySelected !== 1) {
      setProductList(products.filter((item) => item.id === categorySelected))
    }
  }, [categorySelected, products])

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
          {fetchingCategories ? (
            <Spinner />
          ) : (
            categories.map((category) => (
              <Category
                {...category}
                key={category.id + "t"}
                onClick={() => setCategorySelected(category.id)}
                selected={categorySelected}
              />
            ))
          )}
        </ContainerCategories>
        <ContainerProducts>
          {fetchingProducts ? (
            <Spinner />
          ) : (
            productList.map((product) => {
              return (
                <Card
                  key={product.id + "s"}
                  {...product}
                  addProduct={() => dispatchProducts(add_products(product))}
                />
              )
            })
          )}
        </ContainerProducts>
      </Main>
      <Cart
        show={showCart}
        hide={() => setShowCart(false)}
        addedProducts={addedProducts}
      />
    </HomeContainer>
  )
}

export default HomeLayout
