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
    const price = e.target.value
    this.setState({ price })
  },

  submit (e) {
    const id = (new Date()).getTime()
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

    return (
      <form onSubmit={this.submit}>
        <h2>Add pastry</h2>
        <dl className='form-fields'>
          <dt className='form-fields__title'>
            <label>Name</label>
          </dt>
          <dd className='form-fields__input'>
            <input type='text' onChange={this.setName} required />
          </dd>
          <dt className='form-fields__title'>
            <label>Price</label>
          </dt>
          <dd className='form-fields__input'>
            <input type='number' onChange={this.setPrice} required min='0' step='0.01' />
          </dd>
        </dl>
        <button className='button button--small' type='submit'>Add</button>
      </form>
    )
  }
})

export default AddForm
