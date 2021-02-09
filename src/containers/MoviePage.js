import {
    useParams,
  } from "react-router-dom";
import { useEffect } from 'react';
import { singleMovieRequest } from '../redux/thunkFunction'

const MoviePage = () => {
    const { id } = useParams();

    useEffect(() => {
        singleMovieRequest(id)
    }, []);


    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}

export default MoviePage
