import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';

import App from './App';
import * as serviceWorker from './serviceWorker';

export type Theme = {
  spacing: {
    pageWidth: {
      max: number;
    };
  };
  colorPrimary: string;
  typography: {
    body: { fontFamily: string; fontSize: number; lineHeight: string; paddingBottom: number };
    headerSecondary: { fontFamily: string; fontSize: number; fontWeight: string };
    headerTertiary: { fontFamily: string; fontSize: number; fontWeight: string };
    caption: { fontFamily: string; fontSize: number; fontWeight: string };
  };
};

const theme: Theme = {
  spacing: {
    pageWidth: {
      max: 1200
    }
  },
  colorPrimary: '#e3a857',
  typography: {
    body: {
      fontFamily: 'Roboto',
      fontSize: 18,
      lineHeight: '1.5rem',
      paddingBottom: 16
    },
    headerSecondary: {
      fontFamily: 'Roboto',
      fontSize: 24,
      fontWeight: 'medium'
    },
    headerTertiary: {
      fontFamily: 'Roboto',
      fontSize: 18,
      fontWeight: 'regular'
    },
    caption: {
      fontFamily: 'Roboto',
      fontSize: 14,
      fontWeight: 'light'
    }
  }
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
