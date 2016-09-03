import React from 'react'
import AddProductButton from './containers/add-product-button.js'
import Forms from './containers/forms.js'
import ProductList from './containers/product-list.js'

export default React.createClass({
  render () {
    return (
      <div>
        <div className='header'>
          <h1 className='header__title'>Product library</h1>
          <AddProductButton className='header__button' />
        </div>
        <ProductList />
        <Forms />
      </div>
    )
  }
})
