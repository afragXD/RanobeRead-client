import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import classes from './Header.module.css';
import Search from '../Search';
import ThemeChanger from '../ThemeChanger';
import Logo from '../Logo';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <NavLink to="/" className={clsx(classes.hideOnMobile, classes.title)}>
            <Logo />
            <Typography variant="h6">RanobeRead</Typography>
          </NavLink>
          <Box display="flex">
            <Search />
            <div className={classes.hideOnMobile}>
              <ThemeChanger />
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
