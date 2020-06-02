import {
  ADD_EXERCISE_LOG,
  ADD_EXERCISE_LOG_ERROR,
  GET_TOTAL_USER_DISTANCE,
  GET_TOTAL_USER_DISTANCE_ERROR,
} from '../types';
import axios from 'axios';

export const addExerciseLog = (formValues, cb) => async dispatch => {
  try {
    const { data } = await axios.post('/api/exerciselog', formValues, { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: ADD_EXERCISE_LOG, payload: data });
    cb();
  } catch (e) {
    dispatch({ type: ADD_EXERCISE_LOG_ERROR, payload: e })
  }
}

export const getTotalUserDistance = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/exerciselog', { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_TOTAL_USER_DISTANCE, payload: data });
  } catch (e) {
    dispatch({ type: GET_TOTAL_USER_DISTANCE_ERROR, payload: e })
  }
}
