import {combineReducers} from 'redux'

const devices = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DEVICE':
      if (action.payload.device.name && state.indexOf(action.payload.device.name) === -1) {
        return [
          ...state,
          action.payload.device.name
        ]
      } else {
        return [...state]
      }
    default:
      return state
  }
}

const scanning = (state = false, action) => {
  switch (action.type) {
    case 'SCAN_START':
      return true
    case 'SCAN_STOP':
      return false
    default:
      return state
  }
}

export default combineReducers({
  devices,
  scanning
})
