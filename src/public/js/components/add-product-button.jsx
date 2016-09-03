import React from 'react'

const AddProductButton = React.createClass({
  propTypes: {
    click: React.PropTypes.func.isRequired
  },

  render () {
    return (
      <button onClick={this.props.click}>Add product</button>
    )
  }
})

export default AddProductButton
