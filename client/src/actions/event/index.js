import {
  ADD_EVENT,
  ADD_EVENT_ERROR,
  // EDIT_EVENT,
  // EDIT_EVENT_ERROR,
  // DELETE_EVENT,
  // DELETE_EVENT_ERROR,
} from '../types';
import axios from 'axios';

export const addEvent = () => async dispatch => {
  try {
    const { data } = await axios.post('/api/event', { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: ADD_EVENT, payload: data });
  } catch (e) {
    dispatch({ type: ADD_EVENT_ERROR, payload: e })
  }
}

