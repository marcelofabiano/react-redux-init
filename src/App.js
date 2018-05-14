import React, { Component } from 'react'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import Counter from './Counter'
import counterReducer from './store/reducer'

import DisplayCounter from './DisplayCounter'

let store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Counter/>
          <DisplayCounter/>
        </div>
      </Provider>
    )
  }
}

export default App
