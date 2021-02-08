import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_LOADING, FILTER_CHANGE} from '../constants'

const fetchMoviesLoading = () => {
    return {
        type: FETCH_MOVIES_LOADING,
    }
}

const fetchMoviesSuccess = (movies) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movies,
    }
}

const fetchMoviesFailure = error => {
    return {
        type: FETCH_MOVIES_FAILURE,
        payload: error,
    }
}

const changeFilter = filter => {
    return {
        type: FILTER_CHANGE,
        payload: filter,
    }
}

export {fetchMoviesFailure, fetchMoviesLoading, fetchMoviesSuccess, changeFilter};