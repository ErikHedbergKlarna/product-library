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

  onNameChange (e) {
    const name = e.target.value
    this.setState({ name })
  },

  onPriceChange (e) {
    const price = parseInt(e.target.value, 10)
    this.setState({ price })
  },

  submit (e) {
    const id = this.props.id
    const name = this.state.name
    const price = this.state.price

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
        <h2>Edit {name}</h2>
        <ul>
          <li>
            <label>Name</label>
            <input type='text' ref='name' value={name} onChange={this.onNameChange} />
          </li>
          <li>
            <label>Price</label>
            <input type='number' ref='price' value={price} onChange={this.onPriceChange} />
          </li>
          <li>
            <button type='submit'>Update</button>
          </li>
        </ul>
      </form>
    )
  }
})

export default EditForm
