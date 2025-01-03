import { useAppSelector } from '../../hooks/redux';
import {
  selectTopRanobesData,
  selectTopRanobesError,
  selectTopRanobesLoading,
} from '../../redux/selectors/getTop';
import RanobeTopCard from '../RanobeTopCard';
import classes from './RanobeTopList.module.css';
import { CircularProgress, Skeleton, Typography, useTheme } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { IconButton } from '@mui/material';

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
  const error = useAppSelector(selectTopRanobesError);

  const theme = useTheme();

  const isListReady = !error && !isLoading && topRanobesData.length;

  const sceletons = [];

  for (let index = 0; index < 15; index++) {
    sceletons.push(
      <Skeleton key={index} variant="rounded" animation="wave" className={classes.sceleton} />,
    );
  }

  if (!error) {
    return (
      <div
        className={classes.container}
        style={{
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Typography variant="h6" color="error">
          Произошла ошибка: {error}
        </Typography>
      </div>
    );
  }

  return (
    <>
      <div className={classes.title}>Лучшие</div>
      <div className={classes.listContainer}>
        <div className={classes.cardWrapper}>
          <LeftArrow />
          {isListReady &&
            topRanobesData.map((ranobe) => <RanobeTopCard key={ranobe.id} {...ranobe} />)}
          <RightArrow />
          {isLoading && sceletons}
        </div>
      </div>
    </>
  );
};

export default RanobeTopList;
