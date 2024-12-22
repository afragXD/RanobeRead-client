import { AppBar, IconButton, Toolbar, Typography, useColorScheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import styles from './Header.module.css';
import { useCallback, useMemo } from 'react';
import Search from '../search/search';

const Header = () => {
  const { mode, setMode } = useColorScheme();

  const toggleColorMode = useCallback(() => {
    if (mode === 'dark') {
      setMode('light');
      localStorage.setItem(mode, "light")
    } else if (mode === 'light') {
      setMode('system');
      localStorage.setItem(mode, "system")
    } else {
      setMode('dark');
      // localStorage.setItem(mode, "dark")
    }
  }, [mode]);
  const getIcon = useMemo(() => {
    switch (mode) {
      case 'light':
        return <LightModeIcon />;
      case 'dark':
        return <DarkModeIcon />;
      default:
        return <AccessTimeFilledIcon />;
    }
  }, [mode]);

  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar>
        <Typography variant="h6" className={styles.title}>
          RanobeRead
        </Typography>
        <Search></Search>
        <IconButton color="inherit" onClick={toggleColorMode}>
          {getIcon}
          {/* <button onClick={console.log(mode)}></button> */}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
