import {
  useParams,
} from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { singleMovieRequest } from '../redux/thunkFunction';
import MovieInfo from '../components/MovieInfo';

const MoviePage = ({ movie }) => {
  const { id } = useParams();

  useEffect(() => {
    singleMovieRequest(id);
  }, []);

  return (
    <div>
      {movie ? <MovieInfo movie={movie} /> : <h1>Book Not Found</h1>}
    </div>
  );
};

MoviePage.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }),
};

MoviePage.defaultProps = {
  movie: null,
};

const mapStateToProps = state => ({ movie: state.moviePage.movie });

export default connect(mapStateToProps)(MoviePage);
