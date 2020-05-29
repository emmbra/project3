import {
  GET_ALL_TEAMS,
  GET_ALL_TEAMS_ERROR,
  GET_ALL_PUBLIC_TEAMS,
  GET_ALL_PUBLIC_TEAMS_ERROR ,
  GET_ALL_PRIVATE_TEAMS,
  GET_ALL_PRIVATE_TEAMS_ERROR,
  GET_ALL_TEAMS_BY_EVENT_ID,
  GET_ALL_TEAMS_BY_EVENT_ID_ERROR,
  GET_TEAM_USERS,
  ADD_TEAMS,
  ADD_TEAMS_ERROR,
  ADD_USER_TO_TEAM,
  ADD_USER_TO_TEAM_ERROR,
  DELETE_USER_FROM_TEAM_ERROR,
} from '../types';
import axios from 'axios';

export const getAllTeamsByEventId = (eventId) => async dispatch => {
  try {
    const { data } = await axios.get(`/api/team/${eventId}`, eventId, { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_ALL_TEAMS_BY_EVENT_ID, payload: data });
  } catch (e) {
    dispatch({ type: GET_ALL_TEAMS_BY_EVENT_ID_ERROR, payload: e });
  }
};

export const getAllTeams = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/team', { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_ALL_TEAMS, payload: data });
  } catch (e) {
    dispatch({ type: GET_ALL_TEAMS_ERROR, payload: e });
  }
};

export const getAllPublicTeams = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/team/public', { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_ALL_PUBLIC_TEAMS, payload: data });
  } catch (e) {
    dispatch({ type: GET_ALL_PUBLIC_TEAMS_ERROR, payload: e });
  }
};

export const getAllPrivateTeams = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/team/private', { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_ALL_PRIVATE_TEAMS, payload: data });
  } catch (e) {
    dispatch({ type: GET_ALL_PRIVATE_TEAMS_ERROR, payload: e });
  }
};

export const getTeamUsers = ( teamSelected, teamInfo ) => {
  let teamToFind;
  
  for (let i = 0; i < teamInfo.length; i++) {
    if (teamSelected === teamInfo[i].name) {
      teamToFind = teamInfo[i].users
    }
  }
  console.log(teamSelected);
  console.log(teamInfo);
  return {
    type: GET_TEAM_USERS, payload: teamToFind
  }

}

export const deleteUserFromTeam = teamId => async dispatch => {
  try {
    await axios.delete(`/api/team/${teamId}`, { headers: { 'authorization': localStorage.getItem('token') }});
    const { data } = await axios.get('/api/teams', { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_ALL_TEAMS, payload: data });
  } catch (e) {
    dispatch({ type: DELETE_USER_FROM_TEAM_ERROR, payload: e });
  }
};

export const addTeams = (formValues, cb) => async dispatch => {
  try {
    const { data } = await axios.post('/api/team', formValues, { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: ADD_TEAMS, payload: data });
    cb();
  } catch (e) {
    dispatch({ type: ADD_TEAMS_ERROR, payload: e })
  }
}

export const addUserToTeam = (event, _id, passcode, cb ) => async dispatch => {

  // event.preventDefault();
  event.stopPropagation();

  console.log(cb);
  try {
    const { data } = await axios.post(`/api/team/${_id}`, {passcode}, { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: ADD_USER_TO_TEAM, payload: data });
    cb();
  } catch (e) {
    console.log(e);
    dispatch({ type: ADD_USER_TO_TEAM_ERROR, payload: e })
  }
}

