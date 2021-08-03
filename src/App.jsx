import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

import AppRouter from './AppRouter';
import {
  Graphik,
  GraphikSemibold,
  GraphikBold,
  DeadStock,
} from './assets/fonts/fonts';

const theme = createTheme({
  typography: {
    fontFamily: 'Graphik, Roboto, Arial',
    fontWeight: 'normal',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [Graphik, GraphikSemibold, GraphikBold, DeadStock],
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
