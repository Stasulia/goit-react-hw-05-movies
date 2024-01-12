import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies = [] }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(
        ({ id, title }) =>
          title && (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <h3>{title}</h3>
              </Link>
            </li>
          )
      )}
    </ul>
  );
};

export default MoviesList;
