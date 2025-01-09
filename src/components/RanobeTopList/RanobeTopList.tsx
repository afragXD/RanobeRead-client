import { useAppSelector } from '../../hooks/redux';
import { selectTopRanobesData, selectTopRanobesLoading } from '../../redux/selectors/getTopRanobes';
import RanobeTopCard from '../RanobeTopCard';
import classes from './RanobeTopList.module.css';
import { useTheme } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { IconButton } from '@mui/material';
import Skeletons from '../Skeletons';
import { top } from '../../constants/titles';

const LeftArrow = () => {
  const theme = useTheme();

  return (
    <IconButton
      className={`${classes.arrow} ${classes.leftArrow}`}
      style={{
        backgroundColor: theme.palette.primary.main,
      }}
      onClick={() => {
        console.log('ergerg');
      }}
    >
      <NavigateBeforeIcon />
    </IconButton>
  );
};

const RightArrow = () => {
  const theme = useTheme();

  return (
    <IconButton
      className={`${classes.arrow} ${classes.rightArrow}`}
      style={{
        backgroundColor: theme.palette.primary.main,
      }}
      onClick={() => {
        console.log('ergerg');
      }}
    >
      <NavigateNextIcon />
    </IconButton>
  );
};

const RanobeTopList = () => {
  const topRanobesData = useAppSelector(selectTopRanobesData);
  const isLoading = useAppSelector(selectTopRanobesLoading);

  const isListReady = !isLoading && topRanobesData.length;

  return (
    <>
      <div className={classes.title}>{top}</div>
      <div className={classes.listContainer}>
        <div className={classes.cardWrapper}>
          <LeftArrow />
          {isListReady &&
            topRanobesData.map((ranobe) => <RanobeTopCard key={ranobe.id} {...ranobe} />)}
          <RightArrow />
          {isLoading && <Skeletons />}
        </div>
      </div>
    </>
  );
};

export default RanobeTopList;
