import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
         compose,
         applyMiddleware,
         createStore
        } from 'redux'
import thunk from 'redux-thunk'
import '../I18n/I18n' // keep before root container
import RootContainer from './RootContainer'
import applyConfigSettings from '../Config'
import reducers from '../Reducers/reducers.js'
import {setup} from '../Network/bluetooth.js'

// Apply config overrides
applyConfigSettings()

// Create Store
function makeStore (initialState, middlewares) {
  let enhancer

  if (__DEV__) {
    enhancer = compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    )
  } else {
    enhancer = compose(
      applyMiddleware(...middlewares),
    )
  }

  return createStore(reducers, initialState, enhancer)
}

const store = makeStore({}, [thunk])
setup(store.dispatch)

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

export default App
