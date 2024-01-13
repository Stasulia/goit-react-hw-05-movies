import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOnSubmit = event => {
    event.preventDefault();
    // handleSubmit(searchQuery);
    setSearchParams({ search: searchQuery });
    setSearchQuery('');
  };

  const handleChange = ({ target: { value } }) => {
    setSearchQuery(value);
  };

  useEffect(() => {
    !searchQuery && setSearchQuery(searchParams.get('search'));
  }, [searchParams, searchQuery]);

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor="">Title</label>
        <input
          name="search"
          type="text"
          id="exampleInputSearch"
          value={searchQuery}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
