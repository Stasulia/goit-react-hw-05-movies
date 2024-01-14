import { useEffect, useState } from 'react';
import axios from 'axios';

import { API_KEY, BASE_URL } from 'components/Service/MovieApi';
import { Link } from 'react-router-dom';
// import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
        );
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
        setTrendingMovies([]);
      }
    };
    fetchTrendingMovies();
  }, []);
  return (
    <div>
      <p>Trending today:</p>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
        {/* <MoviesList /> */}
      </ul>
    </div>
  );
};
export default Home;
