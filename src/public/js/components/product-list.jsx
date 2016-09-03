import React from 'react'

const ProductList = React.createClass({
  propTypes: {
    products: React.PropTypes.array.isRequired,
    edit: React.PropTypes.func.isRequired,
    delete: React.PropTypes.func.isRequired
  },

  renderProduct (product) {
    return (
      <tr key={ product.id }>
        <td>{ product.name }</td>
        <td>{ product.price }</td>
        <td><button onClick={() => { this.props.edit(product.id) }}>Edit</button></td>
        <td><button onClick={() => { this.props.delete(product.id) }}>Delete</button></td>
      </tr>)
  },

  render () {
    const renderProduct = this.renderProduct

    return (
      <table>
        <tbody>
          { this.props.products.map(renderProduct) }
        </tbody>
      </table>
    )
  }
})

export default ProductList
