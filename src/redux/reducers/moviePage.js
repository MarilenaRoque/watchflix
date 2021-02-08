import { SET_MOVIE_ITEM } from '../../constants'


const moviePage = (state=null, action) => {
    switch (action.type) {
        case SET_MOVIE_ITEM:
            return action.payload;
        default:
            state;
    }
}

