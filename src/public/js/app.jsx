import React from 'react'
import AddForm from './containers/add-form.js'
import ProductList from './containers/product-list.js'

export default React.createClass({
  render () {
    return (
      <div>
        <AddForm />
        <ProductList />
      </div>
    )
  }
})
