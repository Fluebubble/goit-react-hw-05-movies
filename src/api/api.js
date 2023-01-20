import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
export const axEffect = () => {
  console.log(axios.defaults);
};

const API_KEY = 'df36da6d24430bded092102d92ab8190';

const getTrendingMovies = async () => {
  const response = await axios.get('trending/movie/day', {
    params: { api_key: API_KEY },
  });
  return response.data.results;
};

const getMovieDetailsById = async movieId => {
  const response = await axios.get(`movie/${movieId}`, {
    params: { api_key: API_KEY },
  });
  return response.data;
};

const getMovieCreditsById = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits`, {
    params: { api_key: API_KEY },
    language: 'en-US',
  });
  return response.data.cast;
};

const getMovieReviewsById = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews`, {
    params: { api_key: API_KEY },

    // page: 1,
  });
  return response.data;
};

const searchMovies = async query => {
  const response = await axios.get('search/movie', {
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return response.data;
};

export {
  getTrendingMovies,
  getMovieDetailsById,
  getMovieCreditsById,
  getMovieReviewsById,
  searchMovies,
};
