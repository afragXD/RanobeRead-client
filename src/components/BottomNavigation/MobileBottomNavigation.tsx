import { BottomNavigation, BottomNavigationAction, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import classes from './MobileBottomNavigation.module.css';
import { useState } from 'react';
import Logo from '../Logo';
import ThemeChanger from '../ThemeChanger';
import Menu from '../Menu';

const MobileBottomNavigation = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleOpen = () => setIsDrawerOpen(true);
  const handleClose = () => setIsDrawerOpen(false);

  return (
    <>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        className={classes.bottomNav}
        sx={{
          backgroundColor: theme.palette.primary.contrastText,
          '& .MuiBottomNavigationAction-root': {
            color: theme.palette.text.secondary,
            '&:hover': {
              color: theme.palette.primary.main,
            },
          },
          '& .Mui-selected': {
            color: theme.palette.text.secondary,
          },
        }}
      >
        <BottomNavigationAction label="Тема" icon={<ThemeChanger />} />
        <BottomNavigationAction label="" icon={<Logo fontSize="large" />} />
        <BottomNavigationAction label="Меню" icon={<MenuIcon />} onClick={handleOpen} />
      </BottomNavigation>
      <Menu isDrawerOpen={isDrawerOpen} handleOpen={handleOpen} handleClose={handleClose} />
    </>
  );
};

export default MobileBottomNavigation;
