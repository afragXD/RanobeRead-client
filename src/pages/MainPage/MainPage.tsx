import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectTopRanobesData } from '../../redux/selectors/getTop';
import { fetchRanobes } from '../../redux/middleware/TopRanobesThunk';

const MainPage = () => {
  // TODO: убрать после создания списка
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRanobes('ranobe/'));
  }, [dispatch]);
  const topRanobesData = useAppSelector(selectTopRanobesData);
  console.log(topRanobesData);

  return <p>rteg</p>;
};

export default MainPage;
