import {
  ADD_EVENT,
  ADD_EVENT_ERROR,
  EDIT_EVENT,
  EDIT_EVENT_ERROR,
  DELETE_EVENT,
  DELETE_EVENT_ERROR,
  GET_EVENT,
  GET_EVENT_ERROR,
  JOIN_EVENT,
  JOIN_EVENT_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  eventCreated: '',
  addEventError: '',
  editEventError: '',
  deleteEventError: '',
  getEventError: '',
  joinEventError: '',
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_EVENT:
      return {...state, addEventError: ''};
    case ADD_EVENT_ERROR:
      return {...state, addEventError: action.payload};
    case EDIT_EVENT:
      return {...state, editEventError: ''};
    case EDIT_EVENT_ERROR:
      return {...state, editEventError: action.payload};
    case DELETE_EVENT:
      return {...state, deleteEventError: ''};
    case DELETE_EVENT_ERROR:
      return {...state, deleteEventError: action.payload};
    case GET_EVENT:
      return {...state, eventCreated: action.payload, getEventError: ''};
    case GET_EVENT_ERROR:
      return {...state, getEventError: action.payload};
    case JOIN_EVENT:
      return {...state, eventCreated: action.payload, joinEventError: ''};
    case JOIN_EVENT_ERROR:
      return {...state, joinEventError: action.payload};
    default:
      return state;
  }
}
