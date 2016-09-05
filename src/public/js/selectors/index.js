const getQuery = (state) => {
  return state.query
}

const getProducts = (state) => (state.products)

const getFilteredProducts = (state) => {
  const query = getQuery(state).toLowerCase()
  const products = getProducts(state)

  return products.filter((product) => {
    const name = product.name.toLowerCase()
    return name.indexOf(query) !== -1
  })
}

export default {
  getProducts,
  getFilteredProducts
}
