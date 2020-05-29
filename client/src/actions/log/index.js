import {
  ADD_EXERCISE_LOG,
  ADD_EXERCISE_LOG_ERROR,

} from '../types';
import axios from 'axios';

export const addExerciseLog = (formValues) => async dispatch => {
  try {
    const { data } = await axios.post('/api/exerciselog', formValues, { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: ADD_EXERCISE_LOG, payload: data });
  } catch (e) {
    dispatch({ type: ADD_EXERCISE_LOG_ERROR, payload: e })
  }
}

