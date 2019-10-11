/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from '..';

import { Tag, AchievementItem, Button } from './BuildComponents';
// import stockmanScreenShots from '../assets/stockman-screen-shots-icon-style.png';
import stockmanDemoGif from '../assets/the-stockman-demo.gif';

const useStyles = createUseStyles((theme: Theme) => ({
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20
  },
  header: {
    ...theme.typography.headerPrimary
  },
  aboutHeader: {
    ...theme.typography.headerTertiary
  },
  blurb: {
    ...theme.typography.body,
    textAlign: 'justify'
  },
  screenShots: {
    height: 400,
    width: 'auto'
  },
  primaryImage: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '40px 0'
  },
  achievements: {
    display: 'flex',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    width: '100%'
  },
  achieveList: {
    width: '48%'
  },

  tech: {
    padding: '16px 0',
    boxSizing: 'border-box',
    width: '100%'
  },
  techTags: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  }
}));

type Props = {
  goBack: () => void;
};

export default function ProjectStockman({ goBack }: Props) {
  const theme = useTheme();
  const classes: any = useStyles({ theme });
  return (
    <section className={classes.section}>
      <div className={classes.head}>
        <h2 className={classes.header}>The Stockman</h2>
        <Button onClick={goBack}>BACK</Button>
      </div>
      <p className={classes.blurb}>
        A herd management SaaS platform for livestock farmers to track animal numbers, rainfall &
        movements.
      </p>

      <div className={classes.primaryImage}>
        <img className={classes.screenShots} src={stockmanDemoGif} alt="product screen shots" />
      </div>

      <h6 className={classes.aboutHeader}>Achievements</h6>
      <div className={classes.achievements}>
        <div className={classes.achieveList}>
          <AchievementItem>
            Selected technologies that are both exciting, have a large community and longevity
          </AchievementItem>
          <AchievementItem>Set up a CI/CD deployment pipline to AWS with Gitlab</AchievementItem>
          <AchievementItem>Collaborated with UI/UX designers to build the client</AchievementItem>
          <AchievementItem>Integrated google maps drawing library</AchievementItem>
          <AchievementItem>Migrated front end to Typescript</AchievementItem>
        </div>

        <div className={classes.achieveList}>
          <AchievementItem>Only used React Hooks (no classes)</AchievementItem>
          <AchievementItem>Redux, but migrating to Apollo local state</AchievementItem>
          <AchievementItem>
            Used Apollo's Graph Manager to intagrate datagraph with VS Code for improved DX
          </AchievementItem>

          <AchievementItem>Designed and built a serveless graphQL API</AchievementItem>
          <AchievementItem>Designed and built a normalised PostgresSQL database</AchievementItem>
          <AchievementItem>Full test coverage of the API with Jest</AchievementItem>
        </div>
      </div>

      <div className={classes.tech}>
        <h6 className={classes.aboutHeader}>Technologies</h6>
        <div className={classes.techTags}>
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
        </div>
      </div>
      <div className={classes.tech}>
        <h6 className={classes.aboutHeader}>What Else...</h6>
        <p className={classes.blurb}>
          Please email me if you would like to see the code. It's hosted in a private repo as it's
          still active and active project for Bulrush Agritech. Otherwise you have a look at the{' '}
          {''}{' '}
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
      </div>
    </section>
  );
}
