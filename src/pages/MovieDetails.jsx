import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { Loader } from 'components/Loader/Loader';
import { getMoviesDetails } from 'components/Service/MovieApi';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
// import { Circles } from 'react-loader-spinner';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  // const navigate = useNavigate();
  const linkGoBack = useRef(location.state?.from ?? '/');
  // const linkGoBack = useRef(location.state);

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

  // const handleClick = () => {
  //   navigate(linkGoBack.current ?? `/`);
  // };
  return (
    <>
      {/* <button onClick={handleClick}>GO BACK</button> */}
      <GoBackBtn path={linkGoBack.current} />
      <wrapper>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <div>
          <h1>{movieDetails.title}</h1>
          <p>Overview:</p>
          <h2>{movieDetails.overview}</h2>
          <p>Genres:</p>
          <h2>{genres} </h2>
        </div>
      </wrapper>
      <p>Additional information:</p>
      <wrapper>
        <Link to="cast">Cast</Link>

        <Link to="reviews">Reviews</Link>
      </wrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
