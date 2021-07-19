import { put } from '@redux-saga/core/effects';
import * as heroActionCreator from '../action/creatorHeroAction';
import * as API from '../api/index';

export function * createHero (action) {
  try {
    const {
      data: { data: hero }
    } = yield API.createHero(action.data);
    yield put(heroActionCreator.createHeroSuccess(hero));
  } catch (error) {
    yield put(heroActionCreator.createHeroError(error));
  }
}
