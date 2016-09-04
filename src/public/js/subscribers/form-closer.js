import actions from './../actions'

const isProductAdded = (oldState, newState) => {
  return oldState.products.length < newState.products.length
}

const isProductChanged = (oldState, newState) => {
  const oldProducts = oldState.products
  const newProducts = newState.products

  return JSON.stringify(oldProducts) !== JSON.stringify(newProducts)
}

const FormCloser = (store) => {
  let oldState = {...store.getState()}

  store.subscribe(() => {
    const newState = store.getState()
    let action

    if (isProductAdded(oldState, newState)) {
      action = actions.hideAddForm
    }

    if (isProductChanged(oldState, newState)) {
      action = actions.hideEditForm
    }

    oldState = {...newState}

    if (action) {
      store.dispatch(action())
    }
  })
}

export default FormCloser
