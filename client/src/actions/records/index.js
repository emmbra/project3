import {
  GET_RECORDS,
  GET_RECORDS_ERROR,
} from '../types';
import axios from 'axios';

export const getRecords = () => async dispatch => {
  try {
    const { data } = await axios.get('api/record', { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_RECORDS, payload: data });
  } catch (e) {
    dispatch({ type: GET_RECORDS_ERROR, payload:e })
  }
}