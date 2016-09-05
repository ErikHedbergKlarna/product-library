import React from 'react'

const EditForm = React.createClass({
  getInitialState () {
    return {
      name: this.props.initialName,
      price: this.props.initialPrice
    }
  },

  propTypes: {
    id: React.PropTypes.number,
    initialPrice: React.PropTypes.number,
    initialName: React.PropTypes.string,
    submit: React.PropTypes.func.isRequired,
    visible: React.PropTypes.bool.isRequired
  },

  componentWillReceiveProps (props) {
    const { initialName, initialPrice } = props

    this.setState({
      name: initialName,
      price: initialPrice
    })
  },

  setName (e) {
    const name = e.target.value
    this.setState({ name })
  },

  setPrice (e) {
    const price = e.target.value
    this.setState({ price })
  },

  submit (e) {
    const id = this.props.id
    const name = this.state.name
    const price = parseFloat(this.state.price, 10)

    const product = {
      id,
      name,
      price
    }

    e.preventDefault()
    this.props.submit(product)
  },

  render () {
    if (!this.props.visible) {
      return (<div></div>)
    }

    const { name, price } = this.state
    return (
      <form onSubmit={this.submit}>
        <h2>Edit <em>{name}</em></h2>
        <dl className='form-fields'>
          <dt className='form-fields__title'>
            <label>Name</label>
          </dt>
          <dd className='form-fields__input'>
            <input type='text' value={name} onChange={this.setName} required />
          </dd>
          <dt className='form-fields__title'>
            <label>Price</label>
          </dt>
          <dd className='form-fields__input'>
            <input type='number' value={price} onChange={this.setPrice} required min='0' step='0.01' />
          </dd>
        </dl>
        <button className='button button--small' type='submit'>Update</button>
      </form>
    )
  }
})

export default EditForm
