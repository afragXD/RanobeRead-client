import { BottomNavigation, BottomNavigationAction, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import classes from './MobileBottomNavigation.module.css';
import { useState } from 'react';
import Logo from '../Logo';
import ThemeChanger from '../ThemeChanger';

const MobileBottomNavigation = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  return (
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
          color: 'inherit',
        },
      }}
    >
      <BottomNavigationAction label="Тема" icon={<ThemeChanger />} />
      <BottomNavigationAction label="" icon={<Logo fontSize="large" />} />
      <BottomNavigationAction label="Меню" icon={<MenuIcon />} />
    </BottomNavigation>
  );
};

export default MobileBottomNavigation;
