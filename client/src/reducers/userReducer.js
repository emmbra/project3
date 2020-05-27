import {
  GET_USER_BY_ID,
  GET_USER_BY_ID_ERROR,
  GET_ALL_USER_EMAILS,
  GET_ALL_USER_EMAILS_ERROR,
  GET_ALL_USER_USERNAMES,
  GET_ALL_USER_USERNAMES_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  currentUser: [],
  emails: [],
  usernames: [],
  getUserByIdError: '',
  getAllUserEmailsError: '',
  getAllUserUsernamesError: '',
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USER_BY_ID:
      return {...state, currentUser: action.payload, getUserByIdError: ''};
    case GET_USER_BY_ID_ERROR:
      return {...state, getUserByIdError: action.payload};
    case GET_ALL_USER_EMAILS:
      return {...state, emails: action.payload, getAllUserEmailsError: ''};
    case GET_ALL_USER_EMAILS_ERROR:
      return {...state, getAllUserEmailsError: action.payload};
    case GET_ALL_USER_USERNAMES:
      return {...state, usernames: action.payload, getAllUserUsernamesError: ''};
    case GET_ALL_USER_USERNAMES_ERROR:
      return {...state, getAllUserUsernamesError: action.payload};
    default:
      return state;
  }
}
