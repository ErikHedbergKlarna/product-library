import React from 'react'

const ProductList = React.createClass({
  propTypes: {
    products: React.PropTypes.array.isRequired,
    edit: React.PropTypes.func.isRequired,
    delete: React.PropTypes.func.isRequired
  },

  renderProduct (product) {
    return (
      <tr key={ product.id } className='product'>
        <td className='product__info product__info--name'>{ product.name }</td>
        <td className='product__info product__info--price'>{ product.price }</td>
        <td className='product__info product__info--edit'>
          <button className='button button--small' onClick={() => { this.props.edit(product.id) }}>Edit</button>
        </td>
        <td className='product__info product__info--delete'>
          <button className='button button--small' onClick={() => { this.props.delete(product.id) }}>Delete</button>
        </td>
      </tr>)
  },

  render () {
    const renderProduct = this.renderProduct

    return (
      <table className='product-list'>
        <thead>
          <tr>
            <td className='product-list__header'>Name</td>
            <td className='product-list__header'>Price</td>
            <td className='product-list__header'></td>
            <td className='product-list__header'></td>
          </tr>
        </thead>
        <tbody>
          { this.props.products.map(renderProduct) }
        </tbody>
      </table>
    )
  }
})

export default ProductList
