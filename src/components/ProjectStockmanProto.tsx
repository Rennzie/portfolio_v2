/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import prototypeScreenShots from '../assets/livestock-manage-prototype-screens.png';
import { Theme } from '..';
import { Button, Tags, Tag, AchievementItem, Grid, GridItem } from './BuildComponents';

const useStyles = createUseStyles((theme: Theme) => ({
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  header: {
    ...theme.typography.headerPrimary
  },
  blurb: {
    ...theme.typography.body
  },
  primaryImage: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
    // margin: '40px 0'
  },
  screenShots: {
    width: '90%'
  },
  aboutHeader: {
    ...theme.typography.headerTertiary
  },
  tech: {
    padding: '16px 0',
    boxSizing: 'border-box',
    width: '100%'
  }
}));

type Props = {
  goBack: () => void;
};

export default function ProjectStockmanProto({ goBack }: Props) {
  const theme = useTheme();
  const classes: any = useStyles({ theme });

  return (
    <Grid>
      {/*-----------------------
          HEADER
        ------------------------ */}
      <GridItem columnSpan={12} className={classes.head}>
        <h2 className={classes.header}>Livestock management prototype</h2>
        <Button onClick={goBack}>BACK</Button>
      </GridItem>
      <GridItem columnSpan={12}>
        <p className={classes.blurb}>
          This was the precursor to what is now The Stockman. The app was hosted on Heroku and
          essentially recorded livestock numbers and rainfall for a farm.
        </p>
      </GridItem>

      {/*-----------------------
          SCREEN SHOTS
        ------------------------ */}
      <GridItem columnSpan={12} className={classes.primaryImage}>
        <img
          className={classes.screenShots}
          src={prototypeScreenShots}
          alt="product screen shots"
        />
      </GridItem>

      {/*-----------------------
          ACHIEVMENTS
        ------------------------ */}
      <GridItem columnSpan={12}>
        <h6 className={classes.aboutHeader}>Achievements</h6>
      </GridItem>
      <GridItem columnSpan={6}>
        <AchievementItem>
          Designed and built a fullstack React, MongoDB, Express and Node single page web app
        </AchievementItem>
        <AchievementItem>Configured my own webpack and babel</AchievementItem>
        <AchievementItem> >85% test coverage of the API</AchievementItem>
      </GridItem>

      <GridItem columnSpan={6}>
        <AchievementItem>Discovered limitations of No-SQL for relational data</AchievementItem>
        <AchievementItem>Configured OAuth for Google with Passport and Socket.io</AchievementItem>
      </GridItem>

      {/*-----------------------
          TECHNOLOGIES
        ------------------------ */}
      <GridItem columnSpan={12} className={classes.tech}>
        <h6 className={classes.aboutHeader}>Technologies</h6>
        <Tags>
          <Tag>react </Tag>
          <Tag>material-ui </Tag>
          <Tag>axios </Tag>
          <Tag>chart.js </Tag>
          <Tag>webpack </Tag>
          <Tag>bcrypt </Tag>
          <Tag> chai </Tag>
          <Tag> mocha </Tag>
          <Tag> express </Tag>
          <Tag> lodash </Tag>
          <Tag> jwt </Tag>
          <Tag> moment </Tag>
          <Tag> mongoose </Tag>
          <Tag> mongodb </Tag>
          <Tag> passport </Tag>
          <Tag> socket.io </Tag>
          <Tag> babel </Tag>
          <Tag> node </Tag>
          <Tag> heroku </Tag>
        </Tags>
      </GridItem>

      {/*-----------------------
          THE REST
        ------------------------ */}
      <GridItem columnSpan={12} className={classes.tech}>
        <h6 className={classes.aboutHeader}>What Else...</h6>
        <p className={classes.blurb}>
          This project is no longer hosted but have a look at the code
          {''}{' '}
          <span>
            <a
              style={{ color: 'black' }}
              href="https://github.com/Rennzie/livestock-management-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </span>
          .
        </p>
      </GridItem>
    </Grid>
  );
}
