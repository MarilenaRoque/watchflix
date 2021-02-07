import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_LOADING} from '../../constants'

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