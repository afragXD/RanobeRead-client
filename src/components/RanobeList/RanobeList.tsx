import Grid2 from '@mui/material/Grid2';
import { useAppSelector } from '../../hooks/redux';
import { selectRanobesData, selectRanobesLoading } from '../../redux/selectors/getRanobes';
import Sceletons from '../Sceletons';
import classes from './RanobeList.module.css';
import RanobeTopCard from '../RanobeTopCard';
import { list } from '../../constants/titles';

const RanobeList = () => {
  const topRanobesData = useAppSelector(selectRanobesData);
  const isLoading = useAppSelector(selectRanobesLoading);

  const isListReady = !isLoading && topRanobesData.length;

  return (
    <>
      <div className={classes.title}>{list}</div>
      <div className={classes.listContainer}>
        <Grid2 container spacing={2}>
          {isListReady &&
            topRanobesData.map((ranobe) => (
              <Grid2 size={3} key={ranobe.id}>
                <RanobeTopCard {...ranobe} />
              </Grid2>
            ))}
          {isLoading && <Sceletons isGrid />}
        </Grid2>
      </div>
    </>
  );
};

export default RanobeList;
