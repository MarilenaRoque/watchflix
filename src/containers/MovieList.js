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
    });
    return (
        <div>
            <h1>{moviesList}</h1>
        </div>
    )
}

const mapStateToProps = state => ({ moviesList: getterMoviesWithInfo(state).join()});
// MovieList.propTypes = {

// }
export default connect( mapStateToProps )( MovieList );


