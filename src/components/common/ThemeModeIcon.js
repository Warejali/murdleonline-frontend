import { Switch } from '@mui/material';
import React from 'react';
import { useThemeContext } from '../../theme';

export default function ThemeModeIcon() {
  //? 1 for dark mode and 0 for light mode
  const { toggleDarkMode, themeMode } = useThemeContext();

  const handleChange = (e) => {
    toggleDarkMode(e.target.checked);
  };

  return (
    <Switch
      size='small'
      color={toggleDarkMode ? 'warning' : 'inherit'}
      inputProps={{ 'aria-label': 'controlled' }}
      checked={themeMode ? true : false}
      onChange={handleChange}
    />
  );
}
