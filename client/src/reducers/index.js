import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import userReducer from './userReducer';
import teamReducer from './teamReducer';
import eventReducer from './eventReducer';
import logReducer from './logReducer';
import recordReducer from './recordReducer';

// import { ADD_USER_TODO } from '../actions/types';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  team: teamReducer,
  event: eventReducer,
  log: logReducer,
  record: recordReducer,
  form: formReducer.plugin({
    // addTodo: (state, action) => {
    //   switch(action.type) {
    //     case ADD_USER_TODO:
    //       return undefined;
    //     default:
    //       return state;
    //   }
    // }
  }),
});
