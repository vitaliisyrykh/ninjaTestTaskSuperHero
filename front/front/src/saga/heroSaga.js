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

export function * getHeroes (action) {
  try {
    const { data: heroes } = yield API.getAllHeroes(action.payload);
    console.log(heroes);

    yield put(heroActionCreator.getHeroesSuccess(heroes));
  } catch (error) {
    yield put(heroActionCreator.getHeroesError(error));
  }
}

export function * deleteHero (action) {
  try {
    const {
      payload: { id }
    } = action;
    yield API.deleteHero({ id });
    const { data } = yield put(heroActionCreator.deleteHeroSuccess({ id }));
  } catch (error) {
    yield put(heroActionCreator.deleteHeroError(error));
  }
}

export function * deleteSuperPower (action) {
  try {
    const {
      payload: { id, idHero }
    } = action;

    const { data } = yield API.deleteSuperPower({ id, idHero });
    yield put(heroActionCreator.deleteSuperPowerSuccess({ id, idHero }));
  } catch (error) {
    yield put(heroActionCreator.deleteSuperPowerError({ error }));
  }
}

export function * updateHero (action) {
  try {
    const {
      payload: { values: updateBody, id }
    } = action;

    const { data } = yield API.updateHero({ updateBody, id });
    console.log(data);
    yield put(heroActionCreator.updateHeroSuccess({ data }));
  } catch (error) {
    yield put(heroActionCreator.updateHeroError({ error }));
  }
}

export function * createSuperPower (action) {
  try {
    const {
      payload: { values: createSuperPower, id }
    } = action;
    console.log(id);
    const { data } = yield API.createSuperPower({ createSuperPower, id });
    yield put(heroActionCreator.createSuperPowerSuccess({ data, id }));
  } catch (error) {
    yield put(heroActionCreator.createSuperPowerError({ error }));
  }
}

export function * uploadHeroImg (action){
  try {
    const {payload:{heroImg, id}}=action;
    const {data}= yield API.uploadHeroImg({heroImg,id})
    yield put(heroActionCreator.createHeroImgSuccess({data}))
  } catch (error) {
    yield put(heroActionCreator.createHeroImgError({error}))
  }
}
