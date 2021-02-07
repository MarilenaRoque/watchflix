const getterMoviesWithInfo = state => {
    const movies = state.movies.movies;
    const moviesWithUsefulAttributes = movies.map(movie => mappingMovies(movie));
    return moviesWithUsefulAttributes;
}

const mappingMovies = movie => {
    return {
        title: movie.title,
    }
}

export {getterMoviesWithInfo};