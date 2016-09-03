import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import reducer from './reducers'
import App from './app.jsx'
import storage from './utils/storage'

const state = storage.loadState()
const store = createStore(reducer, state, window.devToolsExtension ? window.devToolsExtension() : undefined)

store.subscribe(() => (storage.saveState(store.getState())))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))
