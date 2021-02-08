import { genresMap, imgBaseUrl } from '../constants'

const getterMoviesWithInfo = state => {
    const movies = state.movies.movies;
    const moviesWithUsefulAttributes = movies.map(movie => mappingMovies(movie));
    return moviesWithUsefulAttributes;
}

const setGenreById = id => ( genresMap[id]);

const mappingMovies = movie => {
    return {
        title: movie.title,
        id: movie.id,
        genre: setGenreById(movie.genre_ids[0]),
        imgUrl: imgUrl(movie.backdrop_path)
    }
}

const imgUrl = imgCode => ( imgBaseUrl + imgCode );

export {getterMoviesWithInfo};
