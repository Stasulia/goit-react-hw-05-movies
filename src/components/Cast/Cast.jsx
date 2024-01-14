import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'components/Service/MovieApi';
import css from './Cast.module.css';

import defaultPicture from './default_actor.jpg';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (!movieId) return;
    const fetchMovieCast = async () => {
      try {
        const data = await getMovieCredits(movieId);
        const casts = data.cast;

        if (!casts.length) {
          setError(`No actors are mentioned`);
          setStatus('rejected');
        }

        setCasts(casts);
      } catch (error) {
        setError(error.message);
        setStatus('rejected');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div className={css.castList}>
      {isLoading && <Loader />}
      {status === 'rejected' && <p>{error}</p>}

      {casts.map(cast => {
        if (cast.profile_path) {
          return (
            <div className={css.castList}>
              <ol className={css.castItem} key={cast.id}>
                <img
                  className={css.img}
                  src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                  alt={cast.name}
                />
                <p>Name: {cast.name}</p>

                <h2>Character: {cast.character}</h2>
              </ol>
            </div>
          );
        } else {
          return (
            <div className={css.castList}>
              <ol className={css.castItem} key={cast.id}>
                <img
                  className={css.img}
                  src={defaultPicture}
                  alt={cast.name}
                  height={225}
                />
                <p>Name: {cast.name}</p>
                <h2>Character: {cast.character}</h2>
              </ol>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Cast;
