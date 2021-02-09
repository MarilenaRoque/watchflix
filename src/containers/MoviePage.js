import {
    useParams,
  } from "react-router-dom";
import { useEffect } from 'react';
import { singleMovieRequest } from '../redux/thunkFunction'
import { connect } from 'react-redux';

const MoviePage = ({ movie }) => {
    const { id } = useParams();

    useEffect(() => {
        singleMovieRequest(id)
    }, []);

    return (
        <div>
            {movie ? <h1>{movie.title}</h1> : <h1>{'Book Not Found'}</h1>}
            
        </div>
    )
}

const mapStateToProps = state => ({ movie: state.moviePage.movie})

export default connect(mapStateToProps)(MoviePage);
