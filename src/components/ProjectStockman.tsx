import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from '..';

import stockmanScreenShots from '../assets/stockman-screen-shots-icon-style.png';

const useStyles = createUseStyles((theme: Theme) => ({
  projectHeader: {
    ...theme.typography.headerSecondary
  },
  header: {
    paddingBottom: 16,
    ...theme.typography.headerSecondary
  },
  blurb: {
    ...theme.typography.body
  },
  screenShots: {
    width: '80%'
  },
  section: {
    borderBottom: `2px solid ${theme.colorPrimary}`
  }
}));

export default function ProjectStockman() {
  const theme = useTheme();
  const classes: any = useStyles({ theme });
  return (
    <section className={classes.section}>
      <h1 className={classes.projectHeader}>Projects</h1>
      <h2 className={classes.header}>The Stockman</h2>
      <p className={classes.blurb}>
        A SaaS platform for grassland livestock farmers. The goal was to build a tool that helps
        livestock farmers be more efficient and therefore more profitable. Also to save time by
        removing the overhead of manual/traditional grassland management. We do this by tracking
        metrics like rainfall, livestock numbers and herd movements. From these the platform can
        calculate stocking rate and camp production which are essential to good management and
        decision making.
      </p>
      <p className={classes.blurb}>
        This is an active project that is part of Bulrush Agritech, the start up I co-founded with
        my wife. Please email me for access to the private GitLab repo.
      </p>
      <img className={classes.screenShots} src={stockmanScreenShots} alt="product screen shots" />
      <div>
        <p className={classes.blurb}>
          CHALLENGES: My main challenges centered around choosing which technologies to use. I
          wanted to try new technologies with this project, but also needed ones that had longevity
          and community support. My three biggest changes from previous projects where to using
          GraphQL, a relational database and Typescript. For graphQL I chose Apollo because it comes
          with a number of great features out of the box like client side caching. It appeared to be
          the most favoured graphQL library and has great community support, not to mention AirBnB’s
          wholesale adoption of the technology. For the relational database I chose to go with
          Postgres mostly because of the Knex.js library. Knex made it easy to write my database
          queries in javascript keeping it simple. Typescript was a slower adoption, I originally
          started the project in vanilla JS (the backend is still vanilla), but chose to adopt
          Typescript for the learning challenge and for all the benefits static typing brings to a
          project. The best feature for me however has been the improved DX in VS Code.
        </p>
        <p className={classes.blurb}>
          Other major pain points where around the DevOp for the project. The project uses AWS for
          all its hosting which I had never used before. Fortunately I had support from a friend who
          runs a dev shop and was the motivator for me using AWS in the first place. With his help I
          set up a fluid CI on gitlab to AWS, and I know have an ok understanding of serverless
          architecture and project deployments.
        </p>
      </div>
    </section>
  );
}
