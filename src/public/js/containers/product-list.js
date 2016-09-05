import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './../actions'
import selectors from './../selectors'
import ProductList from './../components/product-list.jsx'

const mapStateToProps = (state) => ({
  products: selectors.getFilteredProducts(state)
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    edit: actions.showEditForm,
    delete: actions.deleteProduct,
    clone: actions.cloneProduct
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList)
