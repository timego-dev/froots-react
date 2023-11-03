import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import './assets/styles/font.css';
import AppRouter from './router';
import theme from './theme';
import { SnackbarProvider } from 'notistack';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <CssBaseline />
          <AppRouter />
        </SnackbarProvider>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
};

export default App;
