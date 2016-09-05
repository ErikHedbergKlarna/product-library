import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import reducer from './reducers'
import App from './app.jsx'
import actions from './actions'
import selectors from './selectors'
import storage from './utils/storage'
import FormCloser from './subscribers/form-closer.js'

const products = storage.loadProducts() || []
const store = createStore(reducer, window.devToolsExtension ? window.devToolsExtension() : undefined)

products.map((product) => {
  store.dispatch(actions.addProduct(product))
})

FormCloser(store)

store.subscribe(() => {
  const state = store.getState()
  const products = selectors.getProducts(state)
  storage.saveProducts(products)
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))
