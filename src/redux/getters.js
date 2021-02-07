
const baseImageUrl = "https://image.tmdb.org/t/p/w500"
// get movies from state and return movies objects with just the info of interest
const moviesGetter = (moviesList) => {
    return moviesList.movies.map(moviesInfo);
}

// get a movie object and filter the useful info
const moviesInfo = movie => {
    return {
        title: movie.title,
        imgUrl: baseImageUrl + movie.backdrop_path,
    }
}

export { moviesGetter };