import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from '..';

import { Tag, AchievementItem, Button, Grid, GridItem, Tags } from './BuildComponents';
import stockmanDemoGif from '../assets/the-stockman-demo.gif';

const useStyles = createUseStyles((theme: Theme) => ({
  head: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  header: {
    ...theme.typography.headerPrimary
  },
  aboutHeader: {
    ...theme.typography.headerTertiary,
    paddingBottom: 0
  },
  blurb: {
    ...theme.typography.body,
    textAlign: 'justify'
  },
  primaryImage: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  achieveList: {
    width: '100%'
  }
}));

type Props = {
  goBack: () => void;
};

export default function ProjectStockman({ goBack }: Props) {
  const theme = useTheme();
  const classes: any = useStyles({ theme });
  return (
    <Grid>
      {/*-----------------------
          HEADER
        ------------------------ */}
      <GridItem columnSpan={12} className={classes.head}>
        <h2 className={classes.header}>The Stockman</h2>
        <Button onClick={goBack}>BACK</Button>
      </GridItem>
      <GridItem columnSpan={12}>
        <p className={classes.blurb}>
          A herd management SaaS platform for livestock farmers to track animal numbers, rainfall &
          movements.
        </p>
      </GridItem>

      {/*-----------------------
          PROJECT GIF
        ------------------------ */}
      <GridItem columnSpan={12} className={classes.primaryImage}>
        <img className={classes.screenShots} src={stockmanDemoGif} alt="product screen shots" />
      </GridItem>

      {/*-----------------------
          ACHIEVEMENTS
        ------------------------ */}
      <GridItem columnSpan={12}>
        <h6 className={classes.aboutHeader}>Achievements</h6>
      </GridItem>
      <GridItem columnSpan={6} className={classes.achieveList}>
        <AchievementItem>Only used React Hooks (no classes)</AchievementItem>
        <AchievementItem>Redux, but migrating to Apollo local state</AchievementItem>
        <AchievementItem>
          Used Apollo's Graph Manager to integrate datagraph with VS Code for improved DX
        </AchievementItem>

        <AchievementItem>Designed and built a serveless graphQL API</AchievementItem>
        <AchievementItem>Designed and built a normalised PostgresSQL database</AchievementItem>
        <AchievementItem>Full test coverage of the API with Jest</AchievementItem>
      </GridItem>
      <GridItem columnSpan={6} className={classes.achieveList}>
        <AchievementItem>
          Selected technologies that are both have a large community & longevity and exciting to
          learn
        </AchievementItem>
        <AchievementItem>Set up a CI/CD deployment pipline to AWS with Gitlab</AchievementItem>
        <AchievementItem>Collaborated with UI/UX designers to build the front-end</AchievementItem>
        <AchievementItem>Integrated the Google maps drawing library</AchievementItem>
        <AchievementItem>Migrated front-end to Typescript</AchievementItem>
      </GridItem>

      {/*-----------------------
          TECHNOLOGIES
        ------------------------ */}
      <GridItem columnSpan={12}>
        <h6 className={classes.aboutHeader}>Technologies</h6>
        <Tags>
          <Tag>react </Tag>
          <Tag>typescript </Tag>
          <Tag>apollo client</Tag>
          <Tag>apollo server</Tag>
          <Tag>gitlab ci/cd </Tag>
          <Tag>amazon web services </Tag>
          <Tag>serverless </Tag>
          <Tag>jest </Tag>
          <Tag>react router </Tag>
          <Tag>postgressql </Tag>
          <Tag>knex </Tag>
          <Tag>material-ui </Tag>
          <Tag>recharts </Tag>
          <Tag>moment </Tag>
          <Tag>redux </Tag>
          <Tag>react google gaps api </Tag>
          <Tag>graphql</Tag>
          <Tag>node</Tag>
          <Tag>aws lambda</Tag>
        </Tags>
      </GridItem>

      {/*-----------------------
          LAST BITS
        ------------------------ */}
      <GridItem columnSpan={12}>
        <h6 className={classes.aboutHeader}>What Else...</h6>
        <p className={classes.blurb}>
          Please email me if you would like to see the code. It's hosted in a private repo as it's
          still an active project for Bulrush Agritech. Otherwise have a look at the {''}{' '}
          <span>
            <a
              style={{ color: 'black' }}
              href="https://www.thestockman.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              landing page
            </a>
          </span>
          .
        </p>
      </GridItem>
    </Grid>
  );
}
