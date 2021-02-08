import { combineReducers } from 'redux';
import movies from './movies'
import filter from './filter'

const rootReducer = combineReducers({ movies, filter })

export default rootReducer