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
        <h2>Add product</h2>
        <dl className='form-fields'>
          <dt className='form-fields__title'>
            <label>Name</label>
          </dt>
          <dd className='form-fields__input'>
            <input type='text' onChange={this.setName} />
          </dd>
          <dt className='form-fields__title'>
            <label>Price</label>
          </dt>
          <dd className='form-fields__input'>
            <input type='text' onChange={this.setPrice} />
          </dd>
        </dl>
        <button className='button button--small' type='submit'>Add</button>
      </form>
    )
  }
})

export default AddForm
