import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './SearchForm.module.css';

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

  // useEffect(() => {
  //   !searchQuery && setSearchQuery(searchParams.get('query'));
  // }, [searchParams, searchQuery]);
  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    setSearchQuery(query);
  }, [searchParams]);

  return (
    <form className={css.searchForm} onSubmit={handleOnSubmit}>
      <div>
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
