import { combineReducers } from 'redux'
import {Scenes} from '../Constants/'

const scene = (state = Scenes.roleSelect, action) => {
  switch (action.type) {
    case 'CHANGE_SCENE':
      console.log("New Scene------------ ", action.payload.name)
      return action.payload.name
    case 'POP_SCENE':
      console.log("New Scene------------ ", action.payload.name)
      return action.payload.name
    default:
      return state
  }
}

const props = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_SCENE':
      return {
        ...action.payload
      }
    default:
      return {...state}
  }
}

const showNavbar = (state = true, action) => {
  console.log("####################################\n " + action.type + "\n######################################")
  switch (action.type) {
    case 'CHANGE_SCENE':
      return action.payload.showNavbar ? action.payload.showNavbar : true
    case 'HIDE_NAVBAR':
      return false
    default:
      return state
  }
}

export default combineReducers({
  scene,
  showNavbar,
  props
})
