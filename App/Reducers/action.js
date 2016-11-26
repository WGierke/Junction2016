export const changeScene = (scene) => ({
  type: 'CHANGE_SCENE',
  payload: scene
})
export const hideNavbar = () => ({type: 'HIDE_NAVBAR', payload:{} })
export const setCurrentStep = (id) => ({type: 'SET_STEP', payload:{id} })

export const addDevice = (device) => ({
  type: 'ADD_DEVICE',
  payload: {device}
})

export const scan = () => (dispatch) => {
  // dispatch(scanStart())
  // return bluetooth.scanDevices()
  //   .then(
  //     r => dispatch(scanStop()),
  //     e => dispatch(scanStop()) // TODO: Add Error handling
  //   )
}
