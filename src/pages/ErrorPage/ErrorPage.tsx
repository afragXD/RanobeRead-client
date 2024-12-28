import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <>
      <div className={styles.errorPage}>
        <h1>Упс! Что-то пошло не так</h1>
        <p>Произошла ошибка. Попробуйте перезагрузить страницу</p>
      </div>
    </>
  );
};
export default ErrorPage;
