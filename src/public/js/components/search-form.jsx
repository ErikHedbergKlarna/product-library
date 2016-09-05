import React from 'react'

const SearchForm = React.createClass({
  getInitialState () {
    return {
      query: ''
    }
  },

  propTypes: {
    update: React.PropTypes.func.isRequired
  },

  onChange (e) {
    const query = e.target.value
    this.setState({ query })
    this.props.update(query)
  },

  render () {
    const query = this.state.query
    return (
      <div>
        <h3>Search</h3>
        <input type='search' onChange={this.onChange} value={query} />
      </div>
    )
  }
})

export default SearchForm
