import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';

import App from './App';
import * as serviceWorker from './serviceWorker';

type Color = {
  main: string;
  light: string;
  dark: string;
  text?: string;
};

type Type = {
  fontFamily: string;
  fontSize: number;
  lineHeight?: string;
  fontWeight?: string;
  paddingBottom?: number;
};

export type Theme = {
  spacing: {
    pageWidth: {
      max: number;
    };
  };
  palette: { primary: Color; secondary: Color };
  typography: {
    body: Type;
    headerPrimary: Type;
    headerSecondary: Type;
    headerTertiary: Type;
    caption: Type;
  };
};

const theme: Theme = {
  spacing: {
    pageWidth: {
      max: 1200
    }
  },
  palette: {
    primary: {
      main: '#d65f09',
      light: '#ff8f3f',
      dark: '#ae7100',
      text: '#000000'
    },
    secondary: { main: '#097ccf', light: '#5eabff', dark: '#00519d' }
  },
  typography: {
    body: {
      fontFamily: 'Roboto',
      fontSize: 20,
      lineHeight: '1.8rem',
      paddingBottom: 16
    },
    headerPrimary: {
      fontFamily: 'Roboto',
      fontSize: 40
      // fontWeight: 'bold'
    },
    headerSecondary: {
      fontFamily: 'Roboto',
      fontSize: 30,
      fontWeight: 'medium'
    },
    headerTertiary: {
      fontFamily: 'Roboto',
      fontSize: 24,
      fontWeight: 'regular'
    },
    caption: {
      fontFamily: 'Roboto',
      fontSize: 18,
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
