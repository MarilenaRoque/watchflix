import React from 'react'
// import PropTypes from 'prop-types'
import store from '../redux/store';
import { useEffect } from 'react';
import moviesRequest from '../redux/thunkFunction';
import { connect } from 'react-redux';
import {getterMoviesWithInfo} from "../redux/getters";



const MovieList = ({ moviesList }) => {
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
            {moviesList && moviesList.length
          ? moviesList.map(movie => (
              <>
              <h1 key={movie.id}>{movie.title}</h1>
              <h6>{movie.genre}</h6>
              </>
            
          ))
          : (<h1>No books yet! :(</h1>)}
        </div>
    )
}

const mapStateToProps = state => ({ moviesList: getterMoviesWithInfo(state)});
// MovieList.propTypes = {

// }
export default connect( mapStateToProps )( MovieList );


