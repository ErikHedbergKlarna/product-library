import React from 'react'

const Forms = React.createClass({
  propTypes: {
    close: React.PropTypes.func.isRequired,
    form: React.PropTypes.func
  },

  render () {
    const Form = this.props.form
    const visible = !!Form

    if (!visible) {
      return (<div></div>)
    }
    return (
      <div className='form-container'>
        <div className='form-container__content'>
          <button className='button button--small button--secondary form-container__close' onClick={this.props.close}>&times;</button>
          <Form />
        </div>
      </div>
    )
  }
})

export default Forms
