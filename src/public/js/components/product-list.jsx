import React from 'react'

const ProductList = React.createClass({
  propTypes: {
    products: React.PropTypes.array.isRequired,
    edit: React.PropTypes.func.isRequired,
    delete: React.PropTypes.func.isRequired,
    clone: React.PropTypes.func.isRequired
  },

  renderProduct (product) {
    return (
      <tr key={ product.id } className='product'>
        <td className='product__info product__info--name'>{ product.name }</td>
        <td className='product__info product__info--price'>{ product.price }</td>
        <td className='product__info product__info--edit'>
          <button className='button button--small button--round' onClick={() => { this.props.edit(product.id) }}><i className='fa fa-pencil'></i></button>
        </td>
        <td className='product__info product__info--clone'>
          <button className='button button--small button--round' onClick={() => { this.props.clone(product.id) }}><i className='fa fa-clone'></i></button>
        </td>
        <td className='product__info product__info--delete'>
          <button className='button button--small button--round' onClick={() => { this.props.delete(product.id) }}><i className='fa fa-trash'></i></button>
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
            <td className='product-list__header'>Edit</td>
            <td className='product-list__header'>Clone</td>
            <td className='product-list__header'>Delete</td>
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
