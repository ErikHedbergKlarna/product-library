import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './../actions'
import EditFormComponent from './../components/edit-form.jsx'

const mapStateToProps = (state) => {
  const { visible } = state.forms.edit
  const { id, name, price } = state.forms.edit.product

  return {
    visible,
    id,
    initialName: name,
    initialPrice: price
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    submit: actions.updateProduct
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditFormComponent)
