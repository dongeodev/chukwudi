import "./App.css"
import Header from "components/Header"
import Category from "components/Category"
import Card from "components/Card"
import CardAddress from "components/CardAddress"

function App() {
  return (
    <main>
      <Header />
      <br />
      <Category />
      <br />
      <Card />
      <br />
      <CardAddress />
    </main>
  )
}

export default App
