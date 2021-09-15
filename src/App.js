import "./App.css"
import Header from "components/Header"
import Category from "components/Category"
import Card from "components/Card"
import CardAddress from "components/CardAddress"
import Title from "components/Title"
import ItemCartDelivery from "components/ItemCartDelivery"
import Dropdown from "components/Dropdown"

function App() {
  return (
    <main>
      <Header />
      <br />
      <Category />
      <br />
      <Card />
      <br />
      <Dropdown />
      <br />
      <CardAddress />
    </main>
  )
}

export default App
