import { combineReducers } from 'redux'

// import toolbar from './reducers/toolbarReducer'
import bluetooth from './bluetoothReducer'
import navigation from './navigationReducer'

const lastAction = (state = {}, action) => {
  return action
}

export default combineReducers({
  navigation,
  bluetooth,
  lastAction
})
