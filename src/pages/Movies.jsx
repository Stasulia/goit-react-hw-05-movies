import { Loader } from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';
import { getMovies } from 'components/Service/MovieApi';
import { useCallback, useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [page] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();

  // const handleSearch = async query => {
  //   const results = await getMovies(query);
  //   setSearchResult(results);
  // };

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
      {/* <SearchForm onSubmit={handleSearch} /> */}
      <div>
        {searchResult.length !== 0 &&
          searchResult.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </div>
    </>
  );
};

export default Movies;
