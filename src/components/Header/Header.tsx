import { AppBar, IconButton, Toolbar, Typography, useColorScheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import styles from './Header.module.css';
import { useCallback, useEffect, useMemo } from 'react';
import Search from '../Search';
import { getSettings, setSettings } from '../../helpers/storage';

const Header = () => {
  const { mode, setMode } = useColorScheme();

  useEffect(() => {
    const { theme } = getSettings();
    setMode(theme);
  }, []);

  const toggleColorMode = useCallback(() => {
    const newMode = mode === 'dark' ? 'light' : mode === 'light' ? 'system' : 'dark';
    setMode(newMode);
    setSettings({ theme: newMode });
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
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
