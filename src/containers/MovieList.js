import React from 'react'
// import PropTypes from 'prop-types'
import store from '../redux/store'
import {useEffect} from 'react';
import moviesRequest from '../redux/thunkFunction'

const MovieList = props => {
    console.log(store.getState())
    useEffect(() => {
        moviesRequest();
    });
    return (
        <div>
            <h1>{store.requesting}</h1>
        </div>
    )
}

// MovieList.propTypes = {

// }

export default MovieList
