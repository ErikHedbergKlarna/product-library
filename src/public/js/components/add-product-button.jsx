import classnames from 'classnames'
import React from 'react'

const AddProductButton = React.createClass({
  propTypes: {
    click: React.PropTypes.func.isRequired,
    className: React.PropTypes.string
  },

  render () {
    const classNames = classnames(
      this.props.className,
      'button'
    )

    return (
      <button className={classNames} onClick={this.props.click}>
        <i className='fa fa-plus-circle'></i>&nbsp;Add product
      </button>
    )
  }
})

export default AddProductButton
