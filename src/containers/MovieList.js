import React from 'react'
// import PropTypes from 'prop-types'
import store from '../redux/store'

const MovieList = props => {
    console.log(store.getState())
    return (
        <div>
            <h1>Something</h1>
        </div>
    )
}

// MovieList.propTypes = {

// }

export default MovieList