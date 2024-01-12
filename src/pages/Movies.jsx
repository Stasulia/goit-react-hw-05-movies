import SearchForm from 'components/SearchForm/SearchForm';
import { getMovies } from 'components/Service/MovieApi';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async query => {
    const results = await getMovies(query);
    setSearchResult(results);
  };
  return (
    <>
      {/* <SearchForm /> */}
      <SearchForm onSubmit={handleSearch} />
      <div>
        {searchResult.length > 0 ? (
          <ul>
            {searchResult.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </>
  );
};

export default Movies;
