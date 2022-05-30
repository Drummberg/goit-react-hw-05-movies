import axios from 'axios';

const API_KEY = '1abcab100520369e11a771de2f4e2532';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchPopularMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  );
  return data.results;
};

const fetchMoviesName = async value => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`,
  );
  return data.results;
};

const fetchMovieById = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
  );
  return response.data;
};
const fetchFilmCasts = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  );
  return response.data.cast;
};

const fetchFilmReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
  return response.data.results;
};

const fetches = {
  fetchPopularMovies,
  fetchMoviesName,
  fetchMovieById,
  fetchFilmCasts,
  fetchFilmReviews,
};
export default fetches;
