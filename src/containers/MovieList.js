import React from 'react'
// import PropTypes from 'prop-types'
import store from '../redux/store'
import {useEffect} from 'react';
import moviesRequest from '../redux/thunkFunction'
import { moviesGetter } from '../redux/getters'
import { connect } from 'react-redux';


const MovieList = props => {
    console.log(store.getState())
    useEffect(() => {
        moviesRequest();
    });
    return (
        <div>
            <h1>{}</h1>
        </div>
    )
}

const mapStateToProps = state => ({ list: moviesGetter(state.movies) });

export default connect( mapStateToProps )(MovieList);
// MovieList.propTypes = {

// }

