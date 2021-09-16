import React, { useReducer, useState } from "react"
import { productReducer } from "reducers/productReducer"

const DataContext = React.createContext()
const initialState = {
  products: [],
}

export const DataContextProvider = ({ children }) => {
  const [addedProducts, dispatchProducts] = useReducer(
    productReducer,
    initialState
  )
  const [user, setUser] = useState(null)
  return (
    <DataContext.Provider
      value={{
        addedProducts,
        dispatchProducts,
        user,
        setUser,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
export default DataContext
