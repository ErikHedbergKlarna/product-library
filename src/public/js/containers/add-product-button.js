import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './../actions'
import AddProductButton from './../components/add-product-button.jsx'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    click: actions.showAddForm
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductButton)
