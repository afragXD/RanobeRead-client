import { useState } from 'react';
import styles from './ErrorPage.module.css';

export const ErrorPage = () => {
  const [hasError, setHasError] = useState(false);

  return (
    <>
      {hasError}
      <div className={styles.errorPage}>
        <h1>Упс! Что-то пошло не так</h1>
        <p>Произошла ошибка. Попробуйте перезагрузить страницу</p>
      </div>
    </>
  );
};
