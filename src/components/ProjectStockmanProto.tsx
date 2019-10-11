/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import prototypeScreenShots from '../assets/livestock-manage-prototype-screens.png';
import { Theme } from '..';
import Button from './BuildComponents/Button';

const useStyles = createUseStyles((theme: Theme) => ({
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& p': {
      cursor: 'pointer',
      color: theme.palette.secondary.main,
      ...theme.typography.body
    }
  },
  projectHeader: {
    ...theme.typography.headerPrimary,
    paddingBottom: 20
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
  }
}));

type Props = {
  goBack: () => void;
};

export default function ProjectStockmanProto({ goBack }: Props) {
  const theme = useTheme();
  const classes: any = useStyles({ theme });

  return (
    <section className={classes.section}>
      <div className={classes.head}>
        <h2 className={classes.header}>Livestock management prototype</h2>
        <Button onClick={goBack}>BACK</Button>
      </div>
      <p className={classes.blurb}>
        This was the precursor to what is no The Stockman. I combined the skills learned at General
        Assembly conversations I was having with my Dad -he is livestock farmer in South Africa- to
        build a digital tool to facilitate his grazing practices. The app was hosted on Heroku and
        essentially recorded livestock numbers for a farm.
      </p>
      <img className={classes.screenShots} src={prototypeScreenShots} alt="product screen shots" />
      <p className={classes.blurb}>
        CHALLENGES: I used the MERN stack when starting out because was all I knew. I quickly ran
        into limitations with a No-SQL database like MongoDB when dealing with relational data so I
        started learning PostgresSQL around this time.
      </p>
    </section>
  );
}
