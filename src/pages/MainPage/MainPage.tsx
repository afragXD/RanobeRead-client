import RanobeTopList from '../../components/RanobeTopList';
import classes from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={classes.mainContainer}>
      <RanobeTopList />
    </div>
  );
};

export default MainPage;
