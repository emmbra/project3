import {
  GET_ALL_TEAMS,
  GET_ALL_TEAMS_ERROR,
  GET_ALL_PUBLIC_TEAMS,
  GET_ALL_PUBLIC_TEAMS_ERROR,
  GET_ALL_PRIVATE_TEAMS,
  GET_ALL_PRIVATE_TEAMS_ERROR,
  ADD_TEAMS,
  ADD_TEAMS_ERROR,
  ADD_USER_TO_TEAM,
  ADD_USER_TO_TEAM_ERROR,
  DELETE_USER_FROM_TEAM,
  DELETE_USER_FROM_TEAM_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  myteam: {},
  myteams: [],
  teams: [],
  publicTeams: [],
  privateTeams: [],
  getAllTeamsError: '',
  getAllPublicTeamsError: '',
  getAllPrivateTeamsError: '',
  addTeamsError: '',
  addUserToTeamError: '',
  deleteUserFromTeamError: ''
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_TEAMS:
      return {...state, allTeams: action.payload, getAllTeamsError: ''};
    case GET_ALL_TEAMS_ERROR:
      return {...state, getAllTeamsError: action.payload};
    case GET_ALL_PUBLIC_TEAMS:
      return {...state, publicTeams: action.payload, getAllPublicTeamsError: ''};
    case GET_ALL_PUBLIC_TEAMS_ERROR:
      return {...state, getAllPublicTeamsError: action.payload};
    case GET_ALL_PRIVATE_TEAMS:
      return {...state, privateTeams: action.payload, getAllPrivateTeamsError: ''};
    case GET_ALL_PRIVATE_TEAMS_ERROR:
      return {...state, getAllPrivateTeamsError: action.payload};
    case ADD_TEAMS:
      return {...state, myteam: action.payload, addTeamsError: ''};
    case ADD_TEAMS_ERROR:
      return {...state, addTeamsError: action.payload};
    case ADD_USER_TO_TEAM:
      return {...state, addUserToTeamError: ''};
    case ADD_USER_TO_TEAM_ERROR:
      return {...state, addUserToTeamError: action.payload};
    case DELETE_USER_FROM_TEAM:
      return {...state, deleteUserFromTeamError: ''};
    case DELETE_USER_FROM_TEAM_ERROR:
      return {...state, deleteUserFromTeamError: action.payload};
    default:
      return state;
  }
}