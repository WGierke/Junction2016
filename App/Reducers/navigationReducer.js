import { combineReducers } from 'redux'
import {Scenes} from '../Constants/'

const scene = (state = Scenes.connect, action) => {
  switch (action.type) {
    case 'CHANGE_SCENE':
      return action.payload.name
    default:
      return state
  }
}

export default combineReducers({
  scene
})
