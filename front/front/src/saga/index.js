import { takeLatest } from '@redux-saga/core/effects';
import ACTION_TYPES from '../action/actionTypes';
import {createHero} from './heroSaga';

function * rootSaga(){
  yield takeLatest(ACTION_TYPES.CREATE_HERO_REQUEST, createHero);
}

export default rootSaga;