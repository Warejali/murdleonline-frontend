import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS
const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

const PRIMARY = {
  lighter: '#D1E9FC',
  light: '#76B0F1',
  main: '#2065D1',
  dark: '#103996',
  darker: '#061B64',
  contrastText: '#fff',
};

const SECONDARY = {
  light: '#919EAB',
  main: '#454F5B',
  dark: '#212B36',
  contrastText: '#fff',
};

const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
  contrastText: '#fff',
};

const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#08660D',
  dark: '#229A16',
  darker: '#08660D',
  contrastText: '#fffnmvghfcfgd',
};

const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
  contrastText: '#fff',
};

export const changePalette = (themeMode, themeColors) => {
  // *  theme value true/1 for dark mode and false/0 for light mode
  const palette = {
    common: { black: '#000', white: '#fff' },
    primary: PRIMARY,
    secondary: {
      light: themeMode ? '#dadce0' : '#919EAB',
      main: themeMode ? '#fff' : '#454F5B',
      dark: '#212B36',
      contrastText: '#fff',
    },
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR,
    grey: GREY,
    divider: alpha(GREY[500], 0.24),
    text: {
      primary: themeMode ? '#dadce0' : GREY[800],
      secondary: themeMode ? '#fff' : GREY[600],
      disabled: GREY[500],
    },
    background: {
      default: themeMode ? themeColors['dark'][0] : themeColors['light'][0],
      paper: themeMode ? themeColors['dark'][1] : themeColors['light'][1],
    },
    action: {
      active: themeMode ? GREY[600] : 'rgba(255, 255, 255, 1)',
      hover: themeMode ? 'rgba(255, 255, 255, 0.08)' : alpha(GREY[500], 0.08),
      selected: themeMode
        ? ' rgba(255, 255, 255, 0.16) '
        : alpha(GREY[500], 0.16),
      disabled: themeMode ? 'rgba(255, 255, 255, 0.3)' : alpha(GREY[500], 0.8),
      disabledBackground: themeMode
        ? 'rgba(255, 255, 255, 0.12)'
        : alpha(GREY[500], 0.24),
      focus: themeMode ? 'rgba(255, 255, 255, 0.12)' : alpha(GREY[500], 0.24),
      hoverOpacity: 0.08,
      disabledOpacity: 0.48,
    },
    mode: themeMode ? 'dark' : 'light',
  };
  return palette;
};
