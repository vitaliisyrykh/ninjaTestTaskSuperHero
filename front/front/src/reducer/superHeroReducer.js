import ACTION_TYPES from '../action/actionTypes';
const initialState = {
  heroes: [],
  isFetching: false,
  error: null
};

function heroReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_HERO_REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }
    case ACTION_TYPES.CREATE_HERO_SUCCESS: {
      const { data: hero } = action;
      const { heroes } = state;
      return {
        ...state,
        isFetching: false,
        heroes: [...heroes, hero]
      };
    }
    case ACTION_TYPES.CREATE_HERO_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    }
    case ACTION_TYPES.GET_HEROES_REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }
    case ACTION_TYPES.GET_HEROES_SUCCESS: {
      const { heroes } = state;
      const {
        payload: { heroes: newHeroes }
      } = action;
      console.log(action);
      return {
        ...state,
        isFetching: false,
        heroes: [...heroes, ...newHeroes]
      };
    }
    case ACTION_TYPES.GET_HEROES_ERROR: {
      const {
        payload: { error }
      } = action;
      return {
        ...state,
        isFetching: false,
        error: error
      };
    }

    case ACTION_TYPES.UPDATE_HERO_REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }

    case ACTION_TYPES.UPDATE_HERO_SUCCESS: {
      const { heroes } = state;
      const {
        payload: { data: updatedHero }
      } = action;
      return {
        ...state,
        isFetching: false,
        heroes: heroes.map(h => {
          return h.id === updatedHero.id ? updatedHero : h;
        })
      };
    }

    case ACTION_TYPES.DELETE_HERO_REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }

    case ACTION_TYPES.DELETE_HERO_SUCCESS: {
      const { heroes } = state;
      const {
        payload: { id }
      } = action;
      const newHeroesArr = heroes.filter(hero => hero.id !== id);
      console.log(heroes);
      console.log(newHeroesArr);
      return {
        ...state,
        isFetching: false,
        heroes: [...newHeroesArr]
      };
    }

    case ACTION_TYPES.DELETE_HERO_ERROR: {
      const {
        payload: { error }
      } = action;
      console.log(error);
      return {
        ...state,
        isFetching: false,
        error: error
      };
    }

    case ACTION_TYPES.CREATE_SUPER_POWER_REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }

    case ACTION_TYPES.CREATE_SUPER_POWER_SUCCESS: {
      const { heroes } = state;
      const {payload:{data:createdPower,id}} = action;
      const hero = heroes.find(hero => hero.id === id);
      hero.SuperPowers.push(createdPower);
      return {
        ...state,
        isFetching:false,
        heroes: heroes.map(h => (h.id === id ? hero : h))
      };
    }
    case ACTION_TYPES.CREATE_SUPER_POWER_ERROR:{
      const {error}=action;
      return{
        ...state,
        isFetching:false,
        error:error
      }
    }

    case ACTION_TYPES.DELETE_SUPER_POWER_REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }

    case ACTION_TYPES.DELETE_SUPER_POWER_SUCCESS: {
      const { heroes } = state;
      const {
        payload: { id, idHero }
      } = action;
      const hero = heroes.find(hero => hero.id === idHero);
      const newSuperPowerArr = hero.SuperPowers.filter(
        power => power.id !== id
      );
      hero.SuperPowers = [...newSuperPowerArr];
      return {
        ...state,
        isFetching: false,
        heroes: heroes.map(h => {
          return h.id === idHero ? hero : h;
        })
      };
    }

    case ACTION_TYPES.DELETE_SUPER_POWER_ERROR: {
      const {
        payload: { error }
      } = action;
      return {
        ...state,
        isFetching: true,
        error: error
      };
    }

    default:
      return state;
  }
}

export default heroReducer;
