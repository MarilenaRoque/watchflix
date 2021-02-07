import store from './store'
import {fetchMoviesFailure, fetchMoviesLoading, fetchMoviesSuccess} from './actiontTypes'
import { getMovies } from '../api/requests'


const moviesRequest = () => {
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

export default moviesRequest;