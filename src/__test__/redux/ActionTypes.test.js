import {
  fetchMoviesFailure,
  fetchMoviesLoading,
  fetchMoviesSuccess,
  changeFilter,
  setMovieLoading,
  setMovieSuccess,
  setMovieFailure,
} from '../../redux/actionTypes';

const exampleMovies = [{ title: 'movie1' }, { title: 'movie1' }, { title: 'movie1' }];

describe('Action Types for Movies', () => {
  it('fetchMoviesLoading return the right action type', () => {
    const action = fetchMoviesLoading();
    expect(action.type).toStrictEqual('FETCH_MOVIES_LOADING');
  });
  it('fetchMoviesFailure return the right action type', () => {
    const action = fetchMoviesFailure(404);
    expect(action.type).toStrictEqual('FETCH_MOVIES_FAILURE');
  });
  it('fetchMoviesFailure return the right action payload', () => {
    const action = fetchMoviesFailure(404);
    expect(action.payload).toStrictEqual(404);
  });
  it('fetchMoviesSuccess return the right action payload', () => {
    const action = fetchMoviesSuccess(exampleMovies);
    expect(action.payload).toStrictEqual(exampleMovies);
  });
  it('fetchMoviesSuccess return the right action type', () => {
    const action = fetchMoviesSuccess(exampleMovies);
    expect(action.type).toStrictEqual('FETCH_MOVIES_SUCCESS');
  });
});

describe('Action Types for Movie Page', () => {
  it('setMovieLoading return the right action type', () => {
    const action = setMovieLoading();
    expect(action.type).toStrictEqual('SET_MOVIE_LOADING');
  });

  it('setMovieSuccess return the right action type', () => {
    const action = setMovieSuccess(exampleMovies);
    expect(action.type).toStrictEqual('SET_MOVIE_SUCCESS');
  });

  it('setMovieSuccess return the right action payload', () => {
    const action = setMovieSuccess(exampleMovies[0]);
    expect(action.payload).toStrictEqual(exampleMovies[0]);
  });

  it('setMovieFailure return the right action type', () => {
    const action = setMovieFailure(404);
    expect(action.type).toStrictEqual('SET_MOVIE_FAILURE');
  });

  it('setMovieFailure return the right action payload', () => {
    const action = setMovieFailure(404);
    expect(action.payload).toStrictEqual(404);
  });
});

describe('Action Types for Filter', () => {
  it('changeFilter return the right action type', () => {
    const action = changeFilter('Drama');
    expect(action.type).toStrictEqual('FILTER_CHANGE');
  });

  it('setMovieFailure return the right action payload', () => {
    const action = setMovieFailure('Drama');
    expect(action.payload).toStrictEqual('Drama');
  });
});
