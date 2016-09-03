import React from 'react'

const AddForm = React.createClass({
  propTypes: {
    submit: React.PropTypes.func.isRequired,
    visible: React.PropTypes.bool.isRequired
  },

  getInitialState () {
    return {
      name: '',
      price: 0
    }
  },

  setName (e) {
    const name = e.target.value
    this.setState({ name })
  },

  setPrice (e) {
    const price = parseInt(e.target.value, 10)
    this.setState({ price })
  },

  submit (e) {
    const product = {
      id: (new Date()).getTime(),
      name: this.state.name,
      price: this.state.price
    }

    e.preventDefault()
    this.props.submit(product)
  },

  render () {
    if (!this.props.visible) {
      return (<div></div>)
    }
    return (
      <form onSubmit={this.submit}>
        <ul>
          <li>
            <label>Name</label>
            <input type='text' onChange={this.setName} />
          </li>
          <li>
            <label>Price</label>
            <input type='number' onChange={this.setPrice} />
          </li>
          <li>
            <button type='submit'>Add</button>
          </li>
        </ul>
      </form>
    )
  }
})

export default AddForm