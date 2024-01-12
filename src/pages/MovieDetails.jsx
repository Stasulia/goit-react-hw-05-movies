// import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { Loader } from 'components/Loader/Loader';
import { getMoviesDetails } from 'components/Service/MovieApi';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
// import { Circles } from 'react-loader-spinner';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  //   const backLinkRef = useRef(location.state?.from ?? '/');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieData = await getMoviesDetails(movieId);
        setMovieDetails(movieData);
      } catch (error) {
        console.error('Error searching movie details:', error);
        setMovieDetails(null);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <Loader />;
  }

  const genres = movieDetails.genres.map(genre => genre.name).join(',');

  const handleClick = () => {
    navigate(location.state?.from ?? `/movies`);
  };
  return (
    <>
      <button onClick={handleClick}>go back</button>
      {/* <GoBackBtn path={backLinkRef.current} /> */}
      <h1>{movieDetails.title}</h1>
      <p>Overview: {movieDetails.overview}</p>
      <p>Genres: {genres} </p> {}
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        alt="movieDetails.title"
        // alt=""
      />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        {/* <li>
          <Link to="reviews">Reviews</Link>
        </li> */}
      </ul>
    </>
  );
};

export default MovieDetails;
