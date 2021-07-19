import {combineReducers} from 'redux';
import heroReducer from './superHeroReducer';

const rootReducer = combineReducers({
  superHero : heroReducer,
})

export default rootReducer;