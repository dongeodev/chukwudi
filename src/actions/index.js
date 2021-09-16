import { PRODUCTS } from "dictionary"

export const add_products = (products) => {
  return {
    type: PRODUCTS.ADD_PRODUCTS,
    payload: {
      products,
    },
  }
}
export const delete_products = () => {
  return {
    type: PRODUCTS.DELETE_PRODUCTS,
  }
}
