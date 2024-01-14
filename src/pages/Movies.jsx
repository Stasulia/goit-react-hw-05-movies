import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { getMovies } from 'components/Service/MovieApi';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [page] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const getFindMovie = useCallback(
    async query => {
      try {
        setIsLoading(true);
        const results = await getMovies(query, page);
        setSearchResult(results);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    },
    [page]
  );

  useEffect(() => {
    const query = searchParams.get('search');
    query && getFindMovie(query);
  }, [getFindMovie, searchParams]);

  return (
    <>
      {isLoading && <Loader />}
      <SearchForm />
      <div>
        <MoviesList movies={searchResult} />
      </div>
    </>
  );
};

export default Movies;
