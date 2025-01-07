import { ReactNode } from 'react';
import classes from './Sceletons.module.css';
import { Skeleton } from '@mui/material';
import Grid2 from '@mui/material/Grid2';

interface SceletonsProps {
  isGrid?: boolean;
}

const Sceletons = ({ isGrid = false }: SceletonsProps) => {
  const sceletons: ReactNode[] = [];
  for (let index = 0; index < 15; index++) {
    if (isGrid) {
      sceletons.push(
        <Grid2 size={3}>
          <Skeleton key={index} variant="rounded" animation="wave" className={classes.sceleton} />
        </Grid2>,
      );
    } else {
      sceletons.push(
        <Skeleton key={index} variant="rounded" animation="wave" className={classes.sceleton} />,
      );
    }
  }
  return <>{sceletons}</>;
};

export default Sceletons;
