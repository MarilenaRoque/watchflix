import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

const MovieCard = props => {
    const {id, title, genre, imgUrl } = props.movie;
    return (
        <Link to={`/movie/${id}`}>
            <h1 key={id}>{title}</h1>
            <h6>{genre}</h6>
            <img src={imgUrl}></img>
        </Link>
    )
}

// MovieItem.propTypes = {

// }

export default MovieCard;
