import { BottomNavigation, BottomNavigationAction, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import clssses from './MobileBottomNavigation.module.css';
import { useState } from 'react';

const MobileBottomNavigation = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  return (
    <BottomNavigation
      value={value}
      onChange={(_, newValue) => setValue(newValue)}
      className={clssses.bottomNav}
      style={{
        backgroundColor: theme.palette.grey[900],
      }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
};

export default MobileBottomNavigation;
