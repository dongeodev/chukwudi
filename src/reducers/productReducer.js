import { PRODUCTS } from "dictionary"

export const productReducer = (state, action) => {
  switch (action.type) {
    case PRODUCTS.ADD_PRODUCTS:
      return { products: [...state.products, action.payload.products] }
    case PRODUCTS.DELETE_PRODUCTS:
      return { products: [] }

    default:
      return state
  }
}
