import ACTION_TYPES from './actionTypes';

export const createHeroRequest = data => ({
  type: ACTION_TYPES.CREATE_HERO_REQUEST,
  data
});

export const createHeroSuccess = data => ({
  type: ACTION_TYPES.CREATE_HERO_SUCCESS,
  data
});

export const createHeroError = error => ({
  type: ACTION_TYPES.CREATE_HERO_ERROR,
  error
});

export const getHeroesRequest = ({ limit, offset }) => ({
  type: ACTION_TYPES.GET_HEROES_REQUEST,
  payload: { limit, offset }
});

export const getHeroesSuccess = heroes => ({
  type: ACTION_TYPES.GET_HEROES_SUCCESS,
  payload: { heroes }
});

export const getHeroesError = ({ error }) => ({
  type: ACTION_TYPES.GET_HEROES_ERROR,
  payload: error
});

export const deleteHeroRequest = ({ id } = {}) => ({
  type: ACTION_TYPES.DELETE_HERO_REQUEST,
  payload: { id }
});

export const deleteHeroSuccess = ({id}={})=>({
  type:ACTION_TYPES.DELETE_HERO_SUCCESS,
  payload:{id}
});

export const deleteHeroError = ({error})=>({
  type:ACTION_TYPES.DELETE_HERO_ERROR,
  payload: error
});