import { Typography } from '@mui/material';
import styles from './ErrorPage.module.css';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <div className={styles.errorPage}>
        <Typography variant="h6" color="error">
          Упс! Что-то пошло не так
        </Typography>
        <Typography color="error">
          Произошла ошибка. Попробуйте перейти на <NavLink to="/">главную страницу</NavLink> сайта.
        </Typography>
      </div>
    </>
  );
};
export default ErrorPage;
