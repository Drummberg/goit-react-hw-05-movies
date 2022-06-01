import axios from 'axios';

const API_KEY = '1abcab100520369e11a771de2f4e2532';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchPopularMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  );
  return data.results;
};

const fetchMoviesName = async inputValue => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${inputValue}&page=1&include_adult=false`,
  );
  return data.results;
};

const fetchMovieById = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
  return response.data;
};
const fetchFilmCasts = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
  return response.data.cast;
};

const fetchFilmReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
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
