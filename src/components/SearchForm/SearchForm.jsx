import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOnSubmit = event => {
    event.preventDefault();
    setSearchParams({ search: searchQuery });
    onSubmit(searchQuery);
  };

  const handleOnChange = ({ target: { value } }) => {
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
          onChange={handleOnChange}
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
