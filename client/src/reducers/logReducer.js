import {
  ADD_EXERCISE_LOG,
  ADD_EXERCISE_LOG_ERROR,
  GET_TOTAL_USER_DISTANCE,
  GET_TOTAL_USER_DISTANCE_ERROR,
  // GET_TOTAL_TEAM_DISTANCE_BY_EVENT_ID_AND_TEAM_ID,
  // GET_TOTAL_TEAM_DISTANCE_BY_EVENT_ID_AND_TEAM_ID_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  totalTeamDistance: '',
  totalUserDistance: '',
  addExerciseLogError: '',
  getTotalUserDistanceError: '',
  getTotalTeamDistanceByEventIdAndTeamIdError: '',
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_EXERCISE_LOG:
      return {...state, addExerciseLogError: ''};
    case ADD_EXERCISE_LOG_ERROR:
      return {...state, addExerciseLogError: action.payload};
    case GET_TOTAL_USER_DISTANCE:
      return {...state, totalUserDistance: action.payload, getTotalUserDistanceError:'' };
    case GET_TOTAL_USER_DISTANCE_ERROR:
      return {...state, getTotalUserDistanceError:action.payload};
    // case GET_TOTAL_TEAM_DISTANCE_BY_EVENT_ID_AND_TEAM_ID:
    //   return {...state, totalTeamDistance: action.payload, getTotalTeamDistanceByEventIdAndTeamIdError: ''};
    // case GET_TOTAL_TEAM_DISTANCE_BY_EVENT_ID_AND_TEAM_ID_ERROR:
    //   return {...state, getTotalTeamDistanceByEventIdAndTeamIdError: action.payload};
    default:
      return state;
  }
}
