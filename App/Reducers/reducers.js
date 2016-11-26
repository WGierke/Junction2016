import { combineReducers } from 'redux'

// import toolbar from './reducers/toolbarReducer'
import bluetooth from './bluetoothReducer'
import navigation from './navigationReducer'
import routine from './routineReducer'
import patient from './patientReducer'

const lastAction = (state = {}, action) => {
  return action
}

export default combineReducers({
  navigation,
  bluetooth,
  lastAction,
  routine,
  patient,
  lastAction,
})
