import { getCategories } from "firebase/client"

import { useState, useEffect } from "react"

export const useDataCategories = () => {
  const [fetchingCategories, setFetching] = useState(false)
  const [categories, setCategories] = useState([])
  useEffect(() => {
    setFetching(true)
    getCategories()
      .then((res) => {
        setCategories(res)
        setFetching(false)
      })
      .catch((e) => console.log(e))
  }, [])

  return { categories, fetchingCategories }
}
