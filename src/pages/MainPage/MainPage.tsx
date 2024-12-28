import stylesMain from './MainPage.module.css';
const MainPage = () => {
  return (
    <>
      // TODO: убрать после создания списка
      const dispatch = useAppDispatch();
      useEffect(() => {
        dispatch(fetchRanobes('ranobe/'));
      }, [dispatch]);
      const topRanobesData = useAppSelector(selectTopRanobesData);
      console.log(topRanobesData);

      return <p>rteg</p>;
      <div className={stylesMain.topCard} />
    </>
  );
};

export default MainPage;
