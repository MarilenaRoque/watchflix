import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styles from '../assets/stylesheets/MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const {
    id, title, genre, imgUrl,
  } = movie;
  return (
    <Link key={id} to={`/movie/${id}`}>
      <div className={Styles.card}>
        <img src={imgUrl} alt="Movie Post" />
        <button type="button" className={Styles.title}>{title}</button>
        <button type="button" className={Styles.genre}>{genre}</button>
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
