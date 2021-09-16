import { getProducts } from "firebase/client"

import { useState, useEffect } from "react"

export const useDataProduct = () => {
  const [fetchingProducts, setFetching] = useState(false)
  const [products, setCategories] = useState([])
  useEffect(() => {
    setFetching(true)
    getProducts()
      .then((res) => {
        setCategories(res)
        setFetching(false)
      })
      .catch((e) => console.log(e))
  }, [])

  return { products, fetchingProducts }
}
