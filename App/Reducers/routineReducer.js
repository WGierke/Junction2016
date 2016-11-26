import { combineReducers } from 'redux'

const mockData = 
  [
  {
  "id": 1,
  "name": "Preparation",
  "created_at": "2016-11-26T09:34:02.223Z",
  "updated_at": "2016-11-26T09:34:02.223Z"
  },
  {
  "id": 2,
  "name": "Anaesthesia",
  "created_at": "2016-11-26T09:34:06.711Z",
  "updated_at": "2016-11-26T09:34:06.711Z"
  },
  {
  "id": 3,
  "name": "Operation",
  "created_at": "2016-11-26T09:34:09.898Z",
  "updated_at": "2016-11-26T09:34:09.898Z"
  },
  {
  "id": 4,
  "name": "Finished",
  "created_at": "2016-11-26T09:34:13.355Z",
  "updated_at": "2016-11-26T09:34:13.355Z"
  }]


const steps = (routineObject=mockData, action) => {
  switch(action.type){
    case 'SET_ROUTINE':
      return [
        ...action.routine
      ]
    default:
      return [
        ...routineObject
      ]
  }
}

const currentStep = (state = 2, action) => {
  switch(action.type){
    case 'SET_STEP':
      return action.payload.id
    default:
      return state
  }
}

export default combineReducers({
  steps,
  currentStep
})