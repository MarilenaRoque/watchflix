import React from 'react'
import { Link } from 'react-router-dom'
import Styles from '../assets/stylesheets/MovieCard.module.css'
// import PropTypes from 'prop-types'

const MovieCard = props => {
    const {id, title, genre, imgUrl } = props.movie;
    return (
            <Link key={id} to={`/movie/${id}`}>
                <div className={Styles.card}>
                    <img src={imgUrl}></img>
                    <button className={Styles.title} >{title}</button>
                    <button type="button" className={Styles.genre} >{genre}</button>
                </div>
            </Link>
    )
}

// MovieItem.propTypes = {

// }

export default MovieCard;
