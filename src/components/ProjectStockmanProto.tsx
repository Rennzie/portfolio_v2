import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import prototypeScreenShots from '../assets/livestock-manage-prototype-screens.png';
import { Theme } from '..';

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
  }
}));

export default function ProjectStockmanProto() {
  const theme = useTheme();
  const classes: any = useStyles({ theme });

  return (
    <section>
      <h2 className={classes.header}>Livestock management prototype</h2>
      <p className={classes.blurb}>
        This was the precursor to what is no The Stockman. I combined the skills learned at General
        Assembly conversations I was having with my Dad - He is livestock farmer in South Africa -
        build a digital tool to facilitate his grazing practices. The app was hosted on Heroku and
        essentially recorded livestock numbers for a farm.
      </p>
      <img src={prototypeScreenShots} alt="product screen shots" />
      <p className={classes.blurb}>
        CHALLENGES: I used the MERN stack when starting out because was all I knew. I quickly ran
        into limitations with a No-SQL database like MongoDB when dealing with relational data so I
        started learning PostgresSQL around this time.
      </p>
    </section>
  );
}
