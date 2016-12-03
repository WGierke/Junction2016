import { ActionTypes } from '../Constants'

export const hideNavbar = () => ({type: 'HIDE_NAVBAR', payload:{} })
export const setCurrentStep = (id) => ({type: 'SET_STEP', payload:{id} })

export const changeScene = (scene) => ({
  type: 'CHANGE_SCENE',
  payload: scene
})

export const popScene = (scene) => ({
  type: 'POP_SCENE',
  payload: scene
})