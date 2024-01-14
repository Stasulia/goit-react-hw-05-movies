import axios from 'axios';

export const API_KEY = '7e904d0cc36c36a15049d60007f4c80a';
export const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

export const getMovies = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

export const getMoviesDetails = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error getting movie details: ', error);
    return null;
  }
};

export const getMovieCredits = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error getting movie credits', error);
    return null;
  }
};

export const getMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error getting reviews for the movie:', error);
    return null;
  }
};
