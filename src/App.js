import "./App.css"
import Header from "components/Header"
import Category from "components/Category"
import Card from "components/Card"
import CardAddress from "components/CardAddress"
import Title from "components/Title"
import ItemCartDelivery from "components/ItemCartDelivery"
import Dropdown from "components/Dropdown"
import ButtonGroup from "components/widgets/ButtonGroup"
import ButtonCheckout from "components/widgets/ButtonCheckout"
import InputSearch from "components/widgets/InputSearch"

function App() {
  return (
    <main>
      <Header />
      <br />
      <Category />
      <br />
      <ButtonGroup />
      <br />
      <InputSearch />
      <br />
      <ButtonCheckout text="Checkout" width="150px" />
      <br />
      <Dropdown />
      <br />
      <CardAddress />
    </main>
  )
}

export default App
