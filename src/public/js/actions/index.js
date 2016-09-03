const ADD_PRODUCT = 'ADD_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product
  }
}

const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id
  }
}

export default {
  ADD_PRODUCT,
  addProduct,
  DELETE_PRODUCT,
  deleteProduct
}
