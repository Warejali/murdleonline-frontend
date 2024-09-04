// @mui
import { GlobalStyles as MUIGlobalStyles } from '@mui/material';

// ----------------------------------------------------------------------

export default function GlobalStyles() {
  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={{
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
        },
        '#root': {
          width: '100%',
          height: '100%',
          overflowY: 'auto',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
        img: {
          display: 'block',
          maxWidth: '100%',
        },
        ul: {
          margin: 0,
          padding: 0,
        },
        '.dispFlexJusAlgCent': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.figure-container': {
          fill: 'transparent',
          stroke: '#fff',
          strokeWidth: 4,
          strokeLinecap: 'round',
          width: '100%',
          height: '100%',
          maxWidth: 300,
        },

        '.figure-part': {
          display: 'none',
        },
      }}
    />
  );

  return inputGlobalStyles;
}
