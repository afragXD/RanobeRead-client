import RanobeList from '../../components/RanobeList';
import RanobeTopList from '../../components/RanobeTopList';
import { useAppSelector } from '../../hooks/redux';
import { selectRanobesError } from '../../redux/selectors/getRanobes';
import { selectTopRanobesError } from '../../redux/selectors/getTopRanobes';
import ErrorPage from '../ErrorPage';
import classes from './MainPage.module.css';

const MainPage = () => {
  const errorTop = useAppSelector(selectTopRanobesError);
  const errorList = useAppSelector(selectRanobesError);
  const error = errorTop || errorList;

  if (error) return <ErrorPage />;

  return (
    <div className={classes.mainContainer}>
      <RanobeTopList />
      <RanobeList />
    </div>
  );
};

export default MainPage;
