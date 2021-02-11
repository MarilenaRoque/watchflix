import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { moviesRequest } from '../redux/thunkFunction';
import getMoviesByFilter from '../redux/getters';
import MovieCard from '../components/MovieCard';
import GenreFilter from '../components/GenreFilter';
import { changeFilter } from '../redux/actionTypes';
import Styles from '../assets/stylesheets/MovieList.module.css';
import MainPost from '../components/MainPost';

const MovieList = ({ moviesList, changeFilter }) => {
  useEffect(() => {
    moviesRequest();
  }, []);
  return (
    <div>
      <MainPost />
      <h1 className={Styles.title}> TOP RATED MOVIES </h1>
      <GenreFilter changeFilter={changeFilter} />
      <div className={Styles.displayList}>
        {moviesList && moviesList.length
          ? moviesList.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))
          : (<h1>No books yet! :(</h1>)}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ moviesList: getMoviesByFilter(state) });
MovieList.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
  changeFilter: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, { changeFilter })(MovieList);
