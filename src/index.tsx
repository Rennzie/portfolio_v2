import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';

import App from './App';
import * as serviceWorker from './serviceWorker';

export type Theme = {
  colorPrimary: string;
  typography: {
    body: { fontFamily: string; fontSize: number; lineHeight: string };
  };
};

const theme = {
  colorPrimary: '#e3a857',
  typography: {
    body: {
      fontFamily: 'Roboto',
      fontSize: 18,
      lineHeight: '1.5rem'
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
