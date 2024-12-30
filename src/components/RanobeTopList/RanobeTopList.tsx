import { useAppSelector } from '../../hooks/redux';
import {
  selectTopRanobesData,
  selectTopRanobesError,
  selectTopRanobesLoading,
} from '../../redux/selectors/getTop';
import RanobeTopCard from '../RanobeTopCard';
import classes from './RanobeTopList.module.css';
import { CircularProgress, Typography, useTheme } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { IconButton } from '@mui/material';

const RanobeTopList = () => {
  const topRanobesData = useAppSelector(selectTopRanobesData);
  const isLoading = useAppSelector(selectTopRanobesLoading);
  const error = useAppSelector(selectTopRanobesError);

  const theme = useTheme();

  if (isLoading) {
    return (
      <div
        className={classes.container}
        style={{
          backgroundColor: theme.palette.grey[900],
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={classes.container}
        style={{
          backgroundColor: theme.palette.grey[900],
        }}
      >
        <Typography variant="h6" color="error">
          Произошла ошибка: {error}
        </Typography>
      </div>
    );
  }

  if (!topRanobesData.length) {
    return (
      <div
        className={classes.container}
        style={{
          backgroundColor: theme.palette.grey[900],
        }}
      >
        <Typography variant="h6" className={classes.empty}>
          Список пуст
        </Typography>
      </div>
    );
  }

  return (
    <>
      <div className={classes.title}>Лучшие</div>
      <div className={classes.listContainer}>
        <div className={classes.cardWrapper}>
          <IconButton
            className={`${classes.arrow} ${classes.leftArrow}`}
            style={{
              backgroundColor: theme.palette.primary.dark,
            }}
            onClick={() => {
              console.log('ergerg');
            }}
          >
            <NavigateBeforeIcon />
          </IconButton>
          {topRanobesData.map((ranobe) => (
            <RanobeTopCard key={ranobe.id} {...ranobe} />
          ))}
          <IconButton
            className={`${classes.arrow} ${classes.rightArrow}`}
            style={{
              backgroundColor: theme.palette.primary.dark,
            }}
            onClick={() => {
              console.log('ergerg');
            }}
          >
            <NavigateNextIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default RanobeTopList;
