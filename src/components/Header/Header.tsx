import { AppBar, Toolbar, Typography } from '@mui/material';
import classes from './Header.module.css';
import Search from '../Search';
import ThemeChanger from '../ThemeChanger';
import Logo from '../Logo';

const Header = () => {
  return (
    <>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <>
            <Logo />
            <Typography variant="h6" className={`${classes.title} ${classes.hideOnMobile}`}>
              RanobeRead
            </Typography>
          </>
          <Search />
          <div className={classes.hideOnMobile}>
            <ThemeChanger />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
