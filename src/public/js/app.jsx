import React from 'react'
import AddForm from './containers/add-form.js'
import AddProductButton from './containers/add-product-button.js'
import EditForm from './containers/edit-form.js'
import ProductList from './containers/product-list.js'

export default React.createClass({
  render () {
    return (
      <div>
        <h1>Product library</h1>
        <AddProductButton />
        <AddForm />
        <EditForm />
        <ProductList />
      </div>
    )
  }
})
