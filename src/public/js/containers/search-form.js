import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './../actions'
import SearchForm from './../components/search-form.jsx'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    update: actions.search
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm)
