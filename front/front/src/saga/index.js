import { takeLatest } from '@redux-saga/core/effects';
import ACTION_TYPES from '../action/actionTypes';
import {
  createHero,
  getHeroes,
  updateHero,
  deleteHero,
  deleteSuperPower, 
  createSuperPower
} from './heroSaga';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_HERO_REQUEST, createHero);
  yield takeLatest(ACTION_TYPES.GET_HEROES_REQUEST, getHeroes);
  yield takeLatest(ACTION_TYPES.UPDATE_HERO_REQUEST, updateHero)
  yield takeLatest(ACTION_TYPES.DELETE_HERO_REQUEST, deleteHero);
  yield takeLatest(ACTION_TYPES.CREATE_SUPER_POWER_REQUEST, createSuperPower)
  yield takeLatest(ACTION_TYPES.DELETE_SUPER_POWER_REQUEST, deleteSuperPower);
}

export default rootSaga;
