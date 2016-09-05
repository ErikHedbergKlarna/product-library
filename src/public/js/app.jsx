import React from 'react'
import AddProductButton from './containers/add-product-button.js'
import Forms from './containers/forms.js'
import ProductList from './containers/product-list.js'
import SearchForm from './containers/search-form.js'

export default React.createClass({
  render () {
    return (
      <div>
        <div className='header'>
          <h1 className='header__title'>Pastry library</h1>
          <AddProductButton className='header__button' />
          <SearchForm />
        </div>
        <ProductList />
        <Forms />
      </div>
    )
  }
})
