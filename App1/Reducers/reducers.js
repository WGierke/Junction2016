import { combineReducers } from 'redux'

import navigation from './navigationReducer'

const lastAction = (state = {}, action) => {
  return action
}

export default combineReducers({
  navigation,
  lastAction,
})
