import HomeLayout from "components/HomeLayout"
import React, { useContext, useEffect } from "react"
import DataContext from "context/DataContext"

import { useDataCategories } from "hooks/useDataCategories"
import { useDataProduct } from "hooks/useDataProducts"
import { useHistory } from "react-router"
function Home() {
  const { addedProducts, dispatchProducts, user } = useContext(DataContext)
  const { categories, fetchingCategories } = useDataCategories()
  const { products, fetchingProducts } = useDataProduct()
  let history = useHistory()
  useEffect(() => {
    !user && history.push("/login")
  }, [user])
  return (
    <HomeLayout
      categories={categories}
      fetchingCategories={fetchingCategories}
      products={products}
      fetchingProducts={fetchingProducts}
      addedProducts={addedProducts}
      dispatchProducts={dispatchProducts}
    />
  )
}

export default Home
