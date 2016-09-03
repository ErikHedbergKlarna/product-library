import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './../actions'
import Forms from './../components/forms.jsx'
import AddForm from './add-form.js'
import EditForm from './edit-form.js'

const getVisibleForm = (forms) => {
  let visibleForm

  if (forms.add.visible) {
    visibleForm = AddForm
  }
  if (forms.edit.visible) {
    visibleForm = EditForm
  }

  return visibleForm
}

const mapStateToProps = (state) => {
  return {
    form: getVisibleForm(state.forms)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    close: actions.hideForms
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forms)
