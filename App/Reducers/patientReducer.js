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

const handleWaypoint = (waypoint={}, action) => {
  switch(action.type){
    case 'CHECK_WAYPOINT':
      return {
        ...waypoint,
        executed: waypoint.id == action.payload.id ? !waypoint.executed : waypoint.executed
      }
    default:
      return {
        ...waypoint
      }
  }
}

const journey = (state=journeyData, action) => {
  switch(action.type){
    case 'ADD_WAYPOINT':
      return [
        ...state,
        action.payload.waypoint
      ]
    case 'CHECK_WAYPOINT':
      return state.map( (waypoint) => (handleWaypoint(waypoint, action) ))
    default:
      return [...state]
  }
}

export default combineReducers({
  id,
  treatment
})


let journeyData = [
  {
    id: 1,
    section: 'Preparation',
    title: 'Get Ready',
    description: 'First of all we need to do something important',
    executed: false,
    image: 'background1',
  },
  {
    id: 1,
    section: 'Preparation',
    title: 'Suitability',
    description: 'In order to go to the mission we have to be fit enough for it',
    executed: false,
    image: 'background2',
  },
  {
    id: 1,
    section: 'Mission',
    title: 'Sleeping Well',
    description: 'To start our mission we first need to talk to Dr. XY.',
    executed: false,
    image: 'background3',
  }
]