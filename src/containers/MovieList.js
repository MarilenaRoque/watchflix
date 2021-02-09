import React from 'react'
// import PropTypes from 'prop-types'
import store from '../redux/store';
import { useEffect } from 'react';
import { moviesRequest} from '../redux/thunkFunction';
import { connect } from 'react-redux';
import {getMoviesByFilter} from "../redux/getters";
import MovieCard from '../components/MovieCard';
import GenreFilter from '../components/GenreFilter'
import { changeFilter } from '../redux/actionTypes'


const MovieList = ({ moviesList, changeFilter }) => {
    console.log(store.getState())
    let mounthFirst = true;
    useEffect(() => {
        if (mounthFirst) {
            moviesRequest();
            mounthFirst = false;
        }
    }, []);
    return (
        <div>
            <GenreFilter changeFilter={changeFilter}></GenreFilter>
            {moviesList && moviesList.length
          ? moviesList.map(movie => (
            <MovieCard movie={movie} key={movie.id}></MovieCard>
          ))
          : (<h1>No books yet! :(</h1>)}
        </div>
    )
}

const mapStateToProps = state => ({ moviesList: getMoviesByFilter(state)});
// MovieList.propTypes = {

// }
export default connect( mapStateToProps, { changeFilter } )( MovieList );


