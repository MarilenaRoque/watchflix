import { FILTER_CHANGE } from '../../constants'

const filterInitialState = "All";

const filter = (state = filterInitialState, action) => {
    switch(action.type) {
        case FILTER_CHANGE:
            console.log('something')
            return action.payload;
        default:
            return state;
    }
}

export default filter;