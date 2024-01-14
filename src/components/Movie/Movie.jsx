import { Link, useLocation } from 'react-router-dom';

const Movie = ({ movie }) => {
  // const location = useLocation();
  return (
    <Link
      to={movie.id.toString()}
      // state={location}
    >
      <div >
        <div>
          <p>{movie.title}</p>
          <p> {movie.price} $</p>
        </div>
      </div>
    </Link>
  );
};
export default Movie;
