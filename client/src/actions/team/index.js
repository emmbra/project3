import {
  GET_ALL_TEAMS,
  GET_ALL_TEAMS_ERROR,
  GET_ALL_PUBLIC_TEAMS,
  GET_ALL_PUBLIC_TEAMS_ERROR ,
  GET_ALL_PRIVATE_TEAMS,
  GET_ALL_PRIVATE_TEAMS_ERROR,
  ADD_TEAMS,
  ADD_TEAMS_ERROR,
  ADD_USER_TO_TEAM,
  ADD_USER_TO_TEAM_ERROR,
  DELETE_USER_FROM_TEAM_ERROR,
} from '../types';
import axios from 'axios';

export const getAllTeams = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/team');
    dispatch({ type: GET_ALL_TEAMS, payload: data });
  } catch (e) {
    dispatch({ type: GET_ALL_TEAMS_ERROR, payload: e });
  }
};

export const getAllPublicTeams = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/team/public');
    dispatch({ type: GET_ALL_PUBLIC_TEAMS, payload: data });
  } catch (e) {
    dispatch({ type: GET_ALL_PUBLIC_TEAMS_ERROR, payload: e });
  }
};

export const getAllPrivateTeams = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/team/private');
    dispatch({ type: GET_ALL_PRIVATE_TEAMS, payload: data });
  } catch (e) {
    dispatch({ type: GET_ALL_PRIVATE_TEAMS_ERROR, payload: e });
  }
};

export const deleteUserFromTeam = teamId => async dispatch => {
  try {
    await axios.delete(`/api/team/${teamId}`, { headers: { 'authorization': localStorage.getItem('token') }});
    const { data } = await axios.get('/api/teams', { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_ALL_TEAMS, payload: data });
  } catch (e) {
    dispatch({ type: DELETE_USER_FROM_TEAM_ERROR, payload: e });
  }
};

export const addTeams = () => async dispatch => {
  try {
    const { data } = await axios.post('/api/team');
    dispatch({ type: ADD_TEAMS, payload: data });
  } catch (e) {
    dispatch({ type: ADD_TEAMS_ERROR, payload: e })
  }
}

export const addUserToTeam = () => async dispatch => {
  try {
    const { data } = await axios.post('/api/team');
    dispatch({ type: ADD_USER_TO_TEAM, payload: data })
  } catch (e) {
    dispatch({ type: ADD_USER_TO_TEAM_ERROR, payload: e })
  }
}

