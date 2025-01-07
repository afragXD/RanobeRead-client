import RanobeTopList from '../../components/RanobeTopList';
import { useAppSelector } from '../../hooks/redux';
import { selectTopRanobesError } from '../../redux/selectors/getTop';
import ErrorPage from '../ErrorPage';
import classes from './MainPage.module.css';

const MainPage = () => {
  const error = useAppSelector(selectTopRanobesError);

  if (error) return <ErrorPage />;

  return (
    <div className={classes.mainContainer}>
      <RanobeTopList />
    </div>
  );
};

export default MainPage;
