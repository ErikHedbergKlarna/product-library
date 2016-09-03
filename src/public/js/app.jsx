import React from 'react'
import AddForm from './containers/add-form.js'
import AddProductButton from './containers/add-product-button.js'
import EditForm from './containers/edit-form.js'
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
        <div className='form-container'>
          <div className='form-container__content'>
            <AddForm />
            <EditForm />
          </div>
        </div>
      </div>
    )
  }
})
