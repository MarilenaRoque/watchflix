import React from 'react'
// import PropTypes from 'prop-types'

const MovieCard = props => {
    const {id, title, genre, imgUrl } = props.movie;
    return (
        <>
            <h1 key={id}>{title}</h1>
            <h6>{genre}</h6>
            <img src={imgUrl}></img>
        </> 
    )
}

// MovieItem.propTypes = {

// }

export default MovieCard;
