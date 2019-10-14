import React from 'react';
import { createUseStyles } from 'react-jss';

import { Grid, GridItem } from './BuildComponents';
import { Theme } from '..';

const useStyles = createUseStyles((theme: Theme) => ({
  header: {
    paddingBottom: 16,
    ...theme.typography.headerPrimary
  },
  paragraph: {
    ...theme.typography.body
  }
}));

export default function AboutThisPage() {
  const classes: any = useStyles();
  return (
    <Grid>
      <GridItem columnSpan={6}>
        <h2 className={classes.header}>About this page </h2>
      </GridItem>
      <GridItem columnSpan={12}>
        <p className={classes.paragraph}>
          This page is a way for me to show the work that I have been involved in over the last
          year. It is also an opportunity for me to play with technologies that I don’t use all that
          often. While this page is built with React (my go to UI library), I experimented with CSS
          Grid, state machines and JSS.
        </p>
        <p className={classes.paragraph}>
          At a very low level I've tried to use the Material grid specification to build my own grid
          components using css-grid. I also tried out using state machines from XState.js. The
          machine controlls which page is being viewed without the need for a router. Adimitedly its
          a complete over engineering, and using booleans with useState would have been fine. That
          being said, I was just having fun and I'm looking forward to using state machines in my
          other projects.{' '}
        </p>
        <p className={classes.paragraph}>
          I particularly enjoyed making my own theme with the React-JSS package from CSSinJS. The
          app is deployed to Github pages with the gh-pages package. Have a look at the repo here.
        </p>
      </GridItem>
    </Grid>
  );
}
