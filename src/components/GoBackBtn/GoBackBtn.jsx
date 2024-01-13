import { Link } from 'react-router-dom';
import css from './GoBackBtn.module.css';

export const GoBackBtn = ({ path }) => {
  return (
    <Link to={path} className={css.back}>
      Go back{' '}
    </Link>
    // <button className={css.goBackBtn} type="button" onClick={onClick}>
    //   Go Back
    // </button>
  );
};
