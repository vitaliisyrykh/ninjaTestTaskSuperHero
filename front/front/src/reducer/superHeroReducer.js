import ACTION_TYPES from '../action/actionTypes';

const initialState = {
  heroes: [],
  isFetching: false,
  error: null
};

function heroReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_HERO_REQUEST: {
      console.log(action.data);
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
        isFetching:false,
        error: action.error
      };
    }

    default:
      return state;
  }
}

export default heroReducer;
