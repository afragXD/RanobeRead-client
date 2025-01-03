import { ReactNode } from 'react';
import classes from './Sceletons.module.css';
import { Skeleton } from '@mui/material';

const Sceletons = () => {
  const sceletons: ReactNode[] = [];
  for (let index = 0; index < 15; index++) {
    sceletons.push(
      <Skeleton key={index} variant="rounded" animation="wave" className={classes.sceleton} />,
    );
  }
  return <>{sceletons}</>;
};

export default Sceletons;
