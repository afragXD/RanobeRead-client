import { SwipeableDrawer } from '@mui/material';
import classes from './Menu.module.css';

interface MenuProps {
  isDrawerOpen: boolean;
  handleClose: () => void;
  handleOpen: () => void;
}

const Menu = ({ isDrawerOpen, handleClose, handleOpen }: MenuProps) => {
  return (
    <SwipeableDrawer
      anchor="right"
      open={isDrawerOpen}
      onOpen={handleOpen}
      onClose={handleClose}
      allowSwipeInChildren={true}
      swipeAreaWidth={50}
      ModalProps={{
        keepMounted: true,
        disableScrollLock: true,
      }}
      className={classes.drawer}
      classes={{
        paper: classes.paper,
      }}
    >
      <p>тут будет меню</p>
      <p>egerg</p>
      <p>egerg</p>
      <p>egerg</p>
    </SwipeableDrawer>
  );
};

export default Menu;
