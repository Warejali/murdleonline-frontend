import React from 'react';
import PropTypes from 'prop-types';
import { createContext, useContext, useMemo } from 'react';
import '@fontsource/quicksand';
// @mui
import { CssBaseline } from '@mui/material';
import { useDarkMode } from '../hooks/useDarkMode';
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';
//
import { changePalette } from './palette';
import typography from './typography';
import GlobalStyles from './globalStyles';

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export const DarkModeContext = createContext();

export const useThemeContext = () => {
  return useContext(DarkModeContext);
};

const themeColors = {
  light: ['#FFFFFF', '#F7F6FF'],
  dark: ['#262b3c', '#2b3041'],
};

export default function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useDarkMode('theme', 1);

  const themeOptions = useMemo(
    () => ({
      palette: changePalette(themeMode, themeColors),
      shape: { borderRadius: 6 },
      typography,
      custom: {
        green: {
          light: '#0a8c11',
          dark: '#08660D',
        },
        blue: {
          light: '#538BF8',
          dark: '#3960AB',
        },
        red: {
          light: '#F55B51',
          dark: '#A83E37',
        },
        grey: {
          light: '#B7B7B7',
          dark: '#6A6A6A',
        },
        greySilver: {
          light: themeMode ? '#565f7e' : '#F2F2F2',
          dark: themeMode ? '#33384b' : '#BEBEBE',
        },
      },
      components: {
        MuiAppBar: {
          styleOverrides: {
            colorDefault: {
              color: changePalette(themeMode, themeColors).text.secondary,
              backgroundColor: changePalette(themeMode, themeColors).background
                .neutral,
            },
          },
        },
      },
    }),
    [themeMode]
  );

  const theme = createTheme(themeOptions);
  const toggleDarkMode = (val) => {
    setThemeMode(val ? 1 : 0);
  };

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <GlobalStyles />
        <CssBaseline />
        <DarkModeContext.Provider value={{ toggleDarkMode, themeMode }}>
          <React.Fragment>{children}</React.Fragment>
        </DarkModeContext.Provider>
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
