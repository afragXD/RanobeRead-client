import { IconButton, useColorScheme } from '@mui/material';
import { getSettings, setSettings } from '../../helpers/storage';
import { useCallback, useEffect, useMemo } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import classes from './ThemeChanger.module.css';

const ThemeChanger = () => {
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
    <IconButton className={classes.hideOnMobile} color="inherit" onClick={toggleColorMode}>
      {getIcon}
    </IconButton>
  );
};

export default ThemeChanger;
