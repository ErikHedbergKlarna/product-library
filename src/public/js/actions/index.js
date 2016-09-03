const ADD_PRODUCT = 'ADD_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

const SHOW_ADD_FORM = 'SHOW_ADD_FORM'
const HIDE_ADD_FORM = 'HIDE_ADD_FORM'

const SHOW_EDIT_FORM = 'SHOW_EDIT_FORM'
const HIDE_EDIT_FORM = 'HIDE_EDIT_FORM'

const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product
})

const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id
})

const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product
})

const showAddForm = () => ({
  type: SHOW_ADD_FORM,
  payload: undefined
})

const hideAddForm = () => ({
  type: HIDE_ADD_FORM,
  payload: undefined
})

const showEditForm = (productId) => ({
  type: SHOW_EDIT_FORM,
  payload: productId
})

const hideEditForm = () => ({
  type: HIDE_EDIT_FORM,
  payload: undefined
})

export default {
  ADD_PRODUCT,
  addProduct,
  DELETE_PRODUCT,
  deleteProduct,
  UPDATE_PRODUCT,
  updateProduct,
  SHOW_ADD_FORM,
  showAddForm,
  HIDE_ADD_FORM,
  hideAddForm,
  SHOW_EDIT_FORM,
  showEditForm,
  HIDE_EDIT_FORM,
  hideEditForm
}
