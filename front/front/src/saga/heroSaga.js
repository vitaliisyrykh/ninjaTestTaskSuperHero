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
};

export function * getHeroes (action){
  try {
    
    const {data:heroes}=yield API.getAllHeroes(action.payload);
    console.log(heroes);
    
    yield put(heroActionCreator.getHeroesSuccess(heroes));
  } catch (error) {
    yield put(heroActionCreator.getHeroesError(error))
  }
}
