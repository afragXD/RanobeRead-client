import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { fetchRanobes } from '../../redux/middleware/TopRanobesThunk';
import RanobeTopList from '../../components/RanobeTopList';
import classes from './MainPage.module.css';

const MainPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRanobes('ranobe/top'));
  }, [dispatch]);

  return (
    <div className={classes.mainContainer}>
      <RanobeTopList />
    </div>
  );
};

export default MainPage;
