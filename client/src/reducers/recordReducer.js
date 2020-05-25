// import {
//  GET_RECORDS_BY_USER_ID,
//  GET_RECORDS_BY_USER_ID_ERROR,
//  ADD_RECORD,
//  ADD_RECORD_ERROR,
//  DELETE_RECORD,
//  DELETE_RECORD_ERROR,
// } from '../actions/types';

// const INITIAL_STATE = {
//   records: [],
//   getRecordsByUserIdError: '',
//   addRecordError: '',
//   deleteRecordError: '',
// }

// export default function (state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case GET_RECORDS_BY_USER_ID:
//       return {...state, getRecordsByUserIdError: ''};
//     case GET_RECORDS_BY_USER_ID_ERROR:
//       return {...state, getRecordsByUserIdError: action.payload};
//     case ADD_RECORD:
//       return {...state, addRecordError: ''};
//     case ADD_RECORD_ERROR:
//       return {...state, addRecordError: action.payload};
//     case DELETE_RECORD:
//       return {...state, deleteRecordError: ''};
//     case DELETE_RECORD_ERROR:
//       return {...state, deleteRecordError: action.payload};
//     default:
//       return state;
//   }
// }
