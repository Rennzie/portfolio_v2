import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from '..';

const useStyles = createUseStyles((theme: Theme) => ({
  aboutPage: {
    gridColumnStart: 'span 4',
    '@media(max-width:720px)': {
      gridColumnStart: '1'
    }
  },
  header: {
    paddingBottom: 16,
    ...theme.typography.headerSecondary
  },
  bodyText: {
    ...theme.typography.body
  }
}));

export default function AboutThisPage() {
  const theme = useTheme();
  const classes: any = useStyles({ theme });
  return (
    <section className={classes.aboutPage}>
      <h2 className={classes.header}>About this page </h2>
      <p className={classes.bodyText}>
        This page is a way for me to show the work that I have been involved over the last year. It
        is also an opportunity for me to play with technologies that I don’t use often in my day to
        day work. While this page is built with React (my go to UI library), I experimented with CSS
        Grid and CSSinJS. I particularly enjoyed making my own theme with the React-JSS package from
        CSSinJS. The app is deployed to Github pages with the gh-pages package. Have a look at the
        repo here.
      </p>
    </section>
  );
}
