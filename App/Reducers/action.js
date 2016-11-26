export const changeScene = (name) => ({
  type: 'CHANGE_SCENE',
  payload: {name}
})

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