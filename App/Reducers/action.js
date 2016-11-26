export const changeScene = (scene) => ({
  type: 'CHANGE_SCENE',
  payload: scene
})
export const hideNavbar = () => ({type: 'HIDE_NAVBAR', payload:{} })

export const addDevice = (device) => ({
  type: 'ADD_DEVICE',
  payload: {device}
})

export const addPatientId = (patientid) => ({
  type: 'ADD_PATIENT_ID',
  payload: {patientid}
})

export const scan = () => (dispatch) => {
  // dispatch(scanStart())
  // return bluetooth.scanDevices()
  //   .then(
  //     r => dispatch(scanStop()),
  //     e => dispatch(scanStop()) // TODO: Add Error handling
  //   )
}
