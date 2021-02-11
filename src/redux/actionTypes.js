import {
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_LOADING,
  FILTER_CHANGE,
  SET_MOVIE_LOADING,
  SET_MOVIE_SUCCESS,
  SET_MOVIE_FAILURE,
} from '../constants';

const fetchMoviesLoading = () => ({
  type: FETCH_MOVIES_LOADING,
});

const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

const fetchMoviesFailure = error => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});

const changeFilter = filter => ({
  type: FILTER_CHANGE,
  payload: filter,
});

const setMovieLoading = () => ({
  type: SET_MOVIE_LOADING,
});

const setMovieFailure = error => ({
  type: SET_MOVIE_FAILURE,
  payload: error,
});

const setMovieSuccess = movie => ({
  type: SET_MOVIE_SUCCESS,
  payload: movie,
});

export {
  fetchMoviesFailure,
  fetchMoviesLoading,
  fetchMoviesSuccess,
  changeFilter,
  setMovieLoading,
  setMovieSuccess,
  setMovieFailure,
};
