import {
  ADD_EVENT,
  ADD_EVENT_ERROR,
  EDIT_EVENT,
  EDIT_EVENT_ERROR,
  DELETE_EVENT,
  DELETE_EVENT_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  addEventError: '',
  editEventError: '',
  deleteEventError: '',
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
      return {...state, deleteEventERror: action.payload};
    default:
      return state;
  }
}
