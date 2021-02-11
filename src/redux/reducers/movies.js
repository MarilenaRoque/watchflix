import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_LOADING } from '../../constants';

const moviesInitialState = {
  movies: [],
  requesting: false,
  error: '',
};

const movies = (state = moviesInitialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        requesting: false,
      };
    case FETCH_MOVIES_LOADING:
      return {
        ...state,
        requesting: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        requesting: false,
      };
    default: return state;
  }
};

export default movies;
