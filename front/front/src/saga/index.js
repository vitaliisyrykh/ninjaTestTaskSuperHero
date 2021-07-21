import { takeLatest } from '@redux-saga/core/effects';
import ACTION_TYPES from '../action/actionTypes';
import {createHero, getHeroes} from './heroSaga';

function * rootSaga(){
  yield takeLatest(ACTION_TYPES.CREATE_HERO_REQUEST, createHero);
  yield takeLatest(ACTION_TYPES.GET_HEROES_REQUEST, getHeroes);
}

export default rootSaga;