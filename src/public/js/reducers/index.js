import actions from './../actions'

const initialState = {
  products: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_PRODUCT:
      const product = action.payload
      const products = [product, ...state.products]
      return {
        ...state,
        products
      }
  }

  return state
}

export default reducer
