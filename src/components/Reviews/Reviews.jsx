// import { Loader } from 'components/Loader/Loader';
// import { getMovieReviews } from 'components/Service/MovieApi';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const Reviews = () => {
//   const { movieId } = useParams();
//   const [reviews, setReviews] = useState([]);
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setIsLoading(true);
//     if (!movieId) return;
//     const fetchMovieReviews = async () => {
//       try {
//         const data = await getMovieReviews(movieId);
//         const reviews = data.result;
//         if (!reviews.length) {
//           setError(`There is no reviews`);
//           setStatus('rejected');
//         }
//         setReviews(reviews);
//       } catch (error) {
//         setError(error.message);
//         setStatus('rejected');
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchMovieReviews();
//   }, [movieId]);

//   return (
//     <>
//       {isLoading && <Loader />}
//       {status === 'rejected' && <p>{error}</p>}

//       {/* {reviews.map(review => (
//         <li key={review.id}>
//           <p>Author: {review.author}</p>
//           <p>{review.content}</p>
//         </li>
//       ))} */}
//       <ul>
//         {reviews.length === 0
//           ? "Sorry, we don't have reviews for this movie"
//           : reviews.map(({ author, content, id }) => (
//               <li key={id}>
//                 <p>Author: {author}</p>
//                 <p>{content}</p>
//               </li>
//             ))}
//       </ul>
//     </>
//   );
// };

// export default Reviews;

import { getMovieReviews } from 'components/Service/MovieApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <div>
      <>
        {reviews.length === 0
          ? "Sorry, we don't have reviews for this movie"
          : reviews.map(({ author, content, id }) => (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            ))}
      </>
    </div>
  );
};
export default Reviews;
