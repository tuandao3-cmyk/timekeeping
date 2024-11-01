'use client';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    success: {
      light: '#6fbf73',
      main: '#AFC536',
      dark: '#357a38',
      contrastText: '#fff',
    },
    primary: {
      dark: '#007bb2',
      main: '#19A6DF',
      light: '#33bfff',
      contrastText: '#fff',
    },
    warning: {
      dark: '#b26a00',
      main: '#ffa600',
      light: '#ffac33',
      contrastText: '#fff',
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Inter,san serif',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      fontWeight: 'inherit',
    },
  },

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          paddingRight: '16px',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          body: {
            fontFamily: 'Inter, Arial, sans-serif',
          },
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        label: {
          fontFamily: 'SF Pro Display,san serif',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        label: {
          fontFamily: 'SF Pro Display,san serif',
          fontSize: '15px',
          lineHeight: '18px',
        },
      },
    },
  },
});
const ThemeRegistry = (props: any) => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeRegistry;
