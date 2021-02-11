import { genresMap, imgBaseUrl } from '../constants';

const setGenreById = id => (genresMap[id]);

const imgUrl = imgCode => (imgBaseUrl + imgCode);

const mappingMovies = movie => ({
  title: movie.title,
  id: movie.id,
  genre: setGenreById(movie.genre_ids[0]),
  imgUrl: imgUrl(movie.backdrop_path),
});

const mapMovieInfo = state => {
  const { movies } = state;
  const moviesWithUsefulAttributes = movies.map(movie => mappingMovies(movie));
  return moviesWithUsefulAttributes;
};

const getMoviesByFilter = state => {
  const { filter } = state;
  let movies = mapMovieInfo(state.movies);
  if (filter !== 'All') {
    movies = movies.filter(movie => movie.genre === filter);
  }
  return movies;
};

export default getMoviesByFilter;
