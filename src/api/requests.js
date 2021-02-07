export const getMovies = async () => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=b299ed7ff9b9312752b6eb948cd16555';
    const request = await fetch(url, { mode: 'cors' });
    if (request.status === 200) {
      const data = await request.json();
      return data;
    }
    throw Error(404);
};