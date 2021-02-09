import store from './store'
import {fetchMoviesFailure, fetchMoviesLoading, fetchMoviesSuccess, setMovieSuccess, SetMovieFailure, SetMovieLoading} from './actionTypes'
import { getMovies, getSingleMovie } from '../api/requests'


export const moviesRequest = () => {
    store.dispatch(fetchMoviesLoading())
    const requestMovies = getMovies();
    requestMovies.then( (data) => {
        store.dispatch(fetchMoviesSuccess(data.results));
        console.log(store.getState());
    })
    .catch((error) => {
        store.dispatch(fetchMoviesFailure(error));
    })
}

export const singleMovieRequest = (id) => {
    store.dispatch(SetMovieLoading())
    const requestMovie = getSingleMovie(id);
    requestMovie.then( (data) => {
        console.log(data)
    })
}
