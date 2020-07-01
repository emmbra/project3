import {
  GET_USER_BY_ID,
  GET_USER_BY_ID_ERROR,
} from '../types';
import axios from 'axios';

export const getUserById = () => async dispatch => {
  try {
    const { data } = await axios.get(`/api/user/`, { headers: { 'authorization': localStorage.getItem('token') }});
    console.log(data);
    dispatch({ type: GET_USER_BY_ID, payload: data });
  } catch (e) {
    dispatch({ type: GET_USER_BY_ID_ERROR, payload: e });
  }
};

