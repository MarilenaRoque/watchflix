import { SET_MOVIE_LOADING, SET_MOVIE_SUCCESS, SET_MOVIE_FAILURE } from '../../constants'
import { SetMovieFailure } from '../actionTypes';

const initialState = {
    movie: null,
    loading: false,
    error: null,
}

const moviePage = (state=initialState, action) => {
    switch (action.type) {
        case SET_MOVIE_LOADING:
            return {
                ...state,
                loading: true,
            }
        case SET_MOVIE_SUCCESS:
            return {
                ...state,
                movie: action.payload,
                loading: false,
            }
        case SET_MOVIE_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

export default moviePage;

