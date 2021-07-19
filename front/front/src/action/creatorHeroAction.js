import ACTION_TYPES from './actionTypes';

export const createHeroRequest = data =>({
  type: ACTION_TYPES.CREATE_HERO_REQUEST,
  data
});

export const createHeroSuccess = data =>({
  type: ACTION_TYPES.CREATE_HERO_SUCCESS,
  data
});

export const createHeroError = error =>({
  type: ACTION_TYPES.CREATE_HERO_ERROR,
  error
});