import { combineReducers } from 'redux'

const id = (state = "", action) => {
  switch (action.type) {
    case 'ADD_PATIENT_ID':
      return action.payload.patientid
    default:
      return state
  }
}

const treatment = (state = "Knee Surgery", action) => {
  switch (action.type) {
    case 'SET_TREATMENT':
      return action.payload.treatment
    default:
      return state
  }
}

export default combineReducers({
  id,
  treatment
})
