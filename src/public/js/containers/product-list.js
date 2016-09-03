import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './../actions'
import ProductList from './../components/product-list.jsx'

const mapStateToProps = (state) => ({
  products: state.products
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    edit: actions.showEditForm,
    delete: actions.deleteProduct
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList)