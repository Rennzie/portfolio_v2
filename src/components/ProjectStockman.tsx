/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from '..';

import Button from './Button';
import stockmanScreenShots from '../assets/stockman-screen-shots-icon-style.png';

const useStyles = createUseStyles((theme: Theme) => ({
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& p': {
      cursor: 'pointer',
      color: theme.palette.secondary.main,
      ...theme.typography.body
    },
    paddingBottom: 20
  },
  header: {
    ...theme.typography.headerPrimary
  },
  aboutHeader: {
    ...theme.typography.headerTertiary
  },
  blurb: {
    ...theme.typography.body
  },
  about: {
    display: 'flex'
  },
  achievements: {
    padding: 16,
    boxSizing: 'border-box',
    width: '50%'
  },
  tech: {
    padding: 16,
    boxSizing: 'border-box',
    width: '50%'
  },
  screenShots: {
    height: 500,
    width: 'auto'
  },
  primaryImage: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '40px 0'
  },
  achieveList: {},
  achieveListItem: {
    ...theme.typography.caption,
    padding: '8px 0',
    listStyleType: 'disc'
  },
  techTags: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  },
  techTag: {
    ...theme.tag
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
        A SaaS platform for grassland livestock management. Farmers can track animal numbers, record
        rainfall and log herd movements.
      </p>
      <div className={classes.primaryImage}>
        <img className={classes.screenShots} src={stockmanScreenShots} alt="product screen shots" />
      </div>
      <div className={classes.about}>
        <div className={classes.achievements}>
          <h6 className={classes.aboutHeader}>Achievements</h6>
          <ul className={classes.achieveListItem}>
            <li className={classes.achieveListItem}>
              Selected technologies that are both exciting, have a large community and longevity
            </li>
            <li className={classes.achieveListItem}>
              Set up a CI/CD deployment pipline to AWS with Gitlab
            </li>
            <li className={classes.achieveListItem}>
              Collaborated with UI/UX designers to build the client
            </li>
            <li className={classes.achieveListItem}>Integrated google maps drawing library</li>
            <li className={classes.achieveListItem}>Migrated front end to Typescript</li>
            <li className={classes.achieveListItem}>Only used React Hooks (no classes)</li>
            <li className={classes.achieveListItem}>Redux, but migrating to Apollo local state</li>
            <li className={classes.achieveListItem}>
              Used Apollo's Graph Manager to intagrate datagraph with VS Code for improved DX
            </li>

            <li className={classes.achieveListItem}>Designed and built a serveless graphQL API</li>
            <li className={classes.achieveListItem}>
              Designed and built a normalised Postgres database
            </li>
            <li className={classes.achieveListItem}>Full test coverage of the API</li>
          </ul>
        </div>
        <div className={classes.tech}>
          <h6 className={classes.aboutHeader}>Technologies</h6>
          <div className={classes.techTags}>
            <span className={classes.techTag}>React </span>
            <span className={classes.techTag}>Typescript </span>
            <span className={classes.techTag}>Apollo Client</span>
            <span className={classes.techTag}>Apollo Server</span>
            <span className={classes.techTag}>Gitlab CI/CD </span>
            <span className={classes.techTag}>Amazon Web Services </span>
            <span className={classes.techTag}>Serverless </span>
            <span className={classes.techTag}>Jest </span>
            <span className={classes.techTag}>React Router </span>
            <span className={classes.techTag}>PostgresSQL </span>
            <span className={classes.techTag}>Knex </span>
            <span className={classes.techTag}>Material-UI </span>
            <span className={classes.techTag}>Recharts </span>
            <span className={classes.techTag}>Moment </span>
            <span className={classes.techTag}>Redux </span>
            <span className={classes.techTag}>React Google Maps </span>
            <span className={classes.techTag}>GraphQL</span>
            <span className={classes.techTag}>AWS Lambda</span>
          </div>
        </div>
      </div>
    </section>
  );
}
