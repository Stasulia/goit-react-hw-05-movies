

import { useEffect, useState } from 'react';

import { getTrendingMovies } from 'components/Service/MovieApi';

import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(res => {
      setMovies(res.results);
    });
  }, []);

  return (
    <div>
      <p>Trending today:</p>
      <MoviesList movies={movies} />
    </div>
  );
};
export default Home;
