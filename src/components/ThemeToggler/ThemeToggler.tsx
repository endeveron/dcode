import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { useAppDispatch, useAppSelector } from 'store';
import { selectThemeMode, setThemeMode, ThemeMode } from 'store/ui';

import './ThemeToggler.scss';

const ThemeToggler = () => {
  const dispatch = useAppDispatch();

  const themeMode = useAppSelector(selectThemeMode);

  const [mode, setMode] = useState<ThemeMode>(themeMode);

  const toggleThemeMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    dispatch(setThemeMode(mode));
  }, [mode, dispatch]);

  const togglerIconEl =
    mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />;

  return (
    <div className="theme-toggler">
      <IconButton
        className="theme-toggler__button"
        onClick={toggleThemeMode}
        sx={{
          color: 'inherit',
        }}
      >
        {togglerIconEl}
      </IconButton>
    </div>
  );
};

export { ThemeToggler };
