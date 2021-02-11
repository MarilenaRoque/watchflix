import { combineReducers } from 'redux';
import movies from './movies';
import filter from './filter';
import moviePage from './moviePage';

const rootReducer = combineReducers({ movies, filter, moviePage });

export default rootReducer;
