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

export const updateHeroRequest =({values,id})=>({
  type: ACTION_TYPES.UPDATE_HERO_REQUEST,
  payload:{values,id}
})

export const updateHeroSuccess = ({data})=>({
  type: ACTION_TYPES.UPDATE_HERO_SUCCESS,
  payload:{data}
});

export const updateHeroError = ({error})=>({
  type: ACTION_TYPES.UPDATE_HERO_ERROR,
  payload:{error}
})



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

export const deleteSuperPowerRequest = ({id,idHero}={})=>({
  type:ACTION_TYPES.DELETE_SUPER_POWER_REQUEST,
  payload:{id,idHero}
})

export const deleteSuperPowerSuccess = ({id,idHero}={})=>({
  type: ACTION_TYPES.DELETE_SUPER_POWER_SUCCESS,
  payload:{id, idHero}
})

export const deleteSuperPowerError = ({error})=>({
  type:ACTION_TYPES.DELETE_SUPER_POWER_ERROR,
  payload:{error}

})