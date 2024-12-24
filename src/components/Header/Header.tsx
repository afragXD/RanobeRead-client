import { AppBar, IconButton, Toolbar, Typography, useColorScheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import styles from './Header.module.css';
import { useCallback, useMemo } from 'react';
import Search from '../search/Search';

const Header = () => {
  const { mode, setMode } = useColorScheme();

  const toggleColorMode = useCallback(() => {
    if (mode === 'dark') {
      setMode('light');
    } else if (mode === 'light') {
      setMode('system');
    } else {
      setMode('dark');
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
        <Search />
        <IconButton color="inherit" onClick={toggleColorMode}>
          {getIcon}
          {/* <button onClick={console.log(mode)}></button> */}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
