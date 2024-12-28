import { useAppSelector } from '../../hooks/redux';
import { selectTopRanobesData } from '../../redux/selectors/getTop';
import RanobeTopCard from '../RanobeTopCard';
import classes from './RanobeTopList.module.css';

const RanobeTopList = () => {
  const topRanobesData = useAppSelector(selectTopRanobesData);

  return (
    <div className={classes.listContainer}>
      <div className={classes.title}>Лучшие</div>
      <div className={classes.cardWrapper}>
        {topRanobesData.map((ranobe) => (
          <RanobeTopCard key={ranobe.id} {...ranobe} />
        ))}
      </div>
    </div>
  );
};

export default RanobeTopList;
