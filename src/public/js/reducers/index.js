import actions from './../actions'

const initialState = {
  products: [],
  forms: {
    add: {
      visible: false
    },
    edit: {
      visible: false,
      product: {
        id: undefined,
        name: undefined,
        price: undefined
      }
    }
  },
  query: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_PRODUCT:
      const product = action.payload
      return {
        ...state,
        products: [product, ...state.products]
      }

    case actions.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => (product.id !== action.payload))
      }

    case actions.CLONE_PRODUCT:
      var clone = {...state.products.find((product) => (product.id === action.payload))}
      clone = {...clone,
        id: (new Date()).getTime(),
        name: `Copy of ${clone.name}`
      }
      return {
        ...state,
        products: [clone, ...state.products]
      }

    case actions.UPDATE_PRODUCT:
      return {
        ...state,
        products: [
          action.payload,
          ...state.products.filter((product) => (product.id !== action.payload.id))
        ]
      }

    case actions.SHOW_ADD_FORM:
      return {
        ...state,
        forms: {
          ...state.forms,
          add: {
            ...state.forms.add,
            visible: true
          }
        }
      }

    case actions.HIDE_ADD_FORM:
      return {
        ...state,
        forms: {
          ...state.forms,
          add: {
            ...state.forms.add,
            visible: false
          }
        }
      }

    case actions.SHOW_EDIT_FORM:
      return {
        ...state,
        forms: {
          ...state.forms,
          edit: {
            ...state.forms.edit,
            visible: true,
            product: state.products.find((product) => product.id === action.payload)
          }
        }
      }

    case actions.HIDE_EDIT_FORM:
      return {
        ...state,
        forms: {
          ...state.forms,
          edit: {
            ...state.forms.edit,
            visible: false
          }
        }
      }

    case actions.HIDE_FORMS:
      return {
        ...state,
        forms: {
          ...state.forms,
          add: {
            ...state.forms.add,
            visible: false
          },
          edit: {
            ...state.forms.edit,
            visible: false
          }
        }
      }

    case actions.SEARCH:
      return {
        ...state,
        query: action.payload
      }
  }

  return state
}

export default reducer
