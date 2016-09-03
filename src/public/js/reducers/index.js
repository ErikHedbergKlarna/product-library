import actions from './../actions'

const initialState = {
  products: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_PRODUCT:
      const product = action.payload
      return {
        ...state,
        products: [product, ...state.products]
      }

    case actions.DELETE_PRODUCT:
      const productId = action.payload
      return {
        ...state,
        products: state.products.filter((product) => (product.id !== productId))
      }
  }

  return state
}

export default reducer
