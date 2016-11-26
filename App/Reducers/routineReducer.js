import { combineReducers } from 'redux'

const mockData = 
  [
{
"id": 1,
"name": "Preparation",
"created_at": "2016-11-26T16:02:29.763Z",
"updated_at": "2016-11-26T16:02:29.763Z",
"description": "We prepare the operating room as well as the patient."
},
{
"id": 2,
"name": "Anaesthesia",
"created_at": "2016-11-26T16:02:29.767Z",
"updated_at": "2016-11-26T16:02:29.767Z",
"description": "We sedate the patient to increase his feeling of well-being during the operation process."
},
{
"id": 3,
"name": "Operation",
"created_at": "2016-11-26T16:02:29.779Z",
"updated_at": "2016-11-26T16:02:29.779Z",
"description": "We perform the actual medical surgery."
},
{
"id": 4,
"name": "Finished",
"created_at": "2016-11-26T16:02:29.782Z",
"updated_at": "2016-11-26T16:02:29.782Z",
"description": "The operation is finished. The patient is now allowed to wake up slowly from the surgery."
}
]


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