import React, { CSSProperties } from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { Grid, GridItem, Tag, Tags } from './BuildComponents';
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
  //@ts-ignore
  const theme: Theme = useTheme();
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
          <h6 style={{ ...theme.typography.headerTertiary } as CSSProperties}>What I tried</h6>
          At a very low level I've tried to use the Material grid specification to build my own grid
          components using css-grid. I also tried out using state machines from XState.js. The
          machine controlls which page is being viewed without the need for a router. Adimittedly
          it's completely over engineered, and using booleans with useState would have done the job.
          That being said, I was just having fun and I'm looking forward to using state machines in
          my other projects.{' '}
        </p>
        <p className={classes.paragraph}>
          <h6 style={{ ...theme.typography.headerTertiary } as CSSProperties}>How it went</h6>I
          particularly enjoyed making my own theme with the React-JSS package from CSSinJS. I've
          been using Material-UI in my projects and love the power themeing gives me. Building my
          own grid components was a real win. I was really battling to lay things out before I made
          them. The app is deployed to Github pages with the gh-pages package. Have a look at the
          repo here.
        </p>
      </GridItem>
      <GridItem columnSpan={12}>
        <h6 style={{ ...theme.typography.headerTertiary } as CSSProperties}>Technologies</h6>
        <Tags>
          <Tag>react</Tag>
          <Tag>xstate</Tag>
          <Tag>react-jss</Tag>
          <Tag>typescript</Tag>
          <Tag>github-pages</Tag>
        </Tags>
      </GridItem>
    </Grid>
  );
}
