import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './../actions'
import AddFormComponent from './../components/add-form.jsx'

const mapStateToProps = (state) => ({
  visible: state.forms.add.visible
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    submit: actions.addProduct
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFormComponent)
