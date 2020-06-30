import {
  ADD_EVENT,
  ADD_EVENT_ERROR,
  GET_EVENT,
  GET_EVENT_ERROR,
  JOIN_EVENT,
  JOIN_EVENT_ERROR
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

export const getEvent = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/event', { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_EVENT, payload: data });
  } catch (e) {
    dispatch({ type: GET_EVENT_ERROR, payload: e })
  }
}

export const joinEvent = (teamId) => async dispatch => {
  try {
    const { data } = await axios.post('/api/event', {teamId}, { headers: { 'authorization': localStorage.getItem('token') }});
    console.log(data);
    dispatch({ type: JOIN_EVENT, payload: data });
  } catch (e) {
    dispatch({ type: JOIN_EVENT_ERROR, payload: e })
  }
}

