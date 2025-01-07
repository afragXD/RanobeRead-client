import { SwipeableDrawer } from '@mui/material';
import classes from './Drawer.module.css';
import { ReactNode } from 'react';

interface DrawerProps {
  isDrawerOpen: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  children: ReactNode;
}

const Drawer = ({ isDrawerOpen, handleClose, handleOpen, children }: DrawerProps) => {
  return (
    <SwipeableDrawer
      anchor="right"
      open={isDrawerOpen}
      onOpen={handleOpen}
      onClose={handleClose}
      allowSwipeInChildren={true}
      swipeAreaWidth={25}
      ModalProps={{
        keepMounted: true,
        disableScrollLock: true,
      }}
      className={classes.drawer}
      classes={{
        paper: classes.paper,
      }}
    >
      {children}
    </SwipeableDrawer>
  );
};

export default Drawer;
