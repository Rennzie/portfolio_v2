/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from '..';

import battleCommand from '../assets/battle-command-board-cropped-1200x1200.png';
import niceRocks from '../assets/nice-rocks-show-page-cropped-1200x1200.png';
import resolut from '../assets/resolute-cropped-1200x1200.png';
import grit from '../assets/grit-dashboard-cropped-1200x1200.png';

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
    ...theme.typography.headerSecondary
  },
  header: {
    paddingBottom: 16,
    ...theme.typography.headerSecondary
  },
  projectTitle: {
    ...theme.typography.headerTertiary
  },
  blurb: {
    ...theme.typography.body
  },
  caption: {
    ...theme.typography.caption
  },
  screenShots: {
    width: '80%'
  },
  projects: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  projectCard: {
    width: '20%',
    padding: 16,
    border: '1px solid #e0e0e0',
    boxShadow: '0px 3px 15px #00000015',
    borderRadius: '15px'
  },
  icon: {
    color: 'grey',
    '&:hover': {
      // color: theme.colorPrimary
    }
  }
}));

type Props = {
  goBack: () => void;
};

export default function ProjectsGeneralAssembly({ goBack }: Props) {
  const theme = useTheme();
  const classes: any = useStyles({ theme });
  return (
    <section>
      <div className={classes.head}>
        <h2 className={classes.header}>General Assembly, London</h2>
        <p onClick={goBack}>{`<< BACK`}</p>
      </div>
      <p className={classes.blurb}>
        While at the General Assembly in 2018 we completed 4 projects over the three months of the
        web development immersive. The aim was to put into practice what we had learned in the
        classroom in the previous weeks. The projects represent a progression from vanilla
        Javascript, CSS and HTML with “Battle Command” through to a full-stack RESTful MERN app with
        Grit. Click the Github icon to see the README and the Chrome icon to visit the app.
      </p>

      <section className={classes.projects}>
        <div className={classes.projectCard}>
          <p className={classes.projectTitle}>One: Battle Command</p>
          <img
            style={{ width: '100%' }}
            src={battleCommand}
            alt="project one screen shot: battle command"
          />
          <p className={classes.caption}>Vanilla JS, CSS and HTML app. Multiplater shooter game</p>
          <a
            id="primary-project"
            target="_blank"
            href="https://github.com/rennzie/two-person-shooter-game-ga-wdi-prj1"
            className={classes.icon}
            rel="noopener noreferrer"
          >
            <i className="fab fa-3x fa-github-square" />
          </a>
          <a
            id="primary-project"
            target="_blank"
            href="http://seanrennie.com/two-person-shooter-game-ga-wdi-prj1"
            className={classes.icon}
            rel="noopener noreferrer"
          >
            <i className="fab fa-3x fa-chrome" />
          </a>
        </div>
        <div className={classes.projectCard}>
          <p className={classes.projectTitle}>Two: Nice Rocks</p>
          <img
            style={{ width: '100%' }}
            src={niceRocks}
            alt="project two screen shot: nice rocks"
          />
          <p className={classes.caption}>
            Full-stack express app. Geological tourism site review app.
          </p>
          <a
            id="primary-project"
            target="_blank"
            href="https://github.com/rennzie/geotourism-reviewpage-ga-wdi-prj2"
            className={classes.icon}
            rel="noopener noreferrer"
          >
            <i className="fab fa-3x fa-github-square" />
          </a>
          <a
            id="primary-project"
            target="_blank"
            href="https://nice-rocks.herokuapp.com/"
            className={classes.icon}
            rel="noopener noreferrer"
          >
            <i className="fab fa-3x fa-chrome" />
          </a>
        </div>
        <div className={classes.projectCard}>
          <p className={classes.projectTitle}>Three: Resolut</p>
          <img
            style={{ width: '100%' }}
            src={resolut}
            alt="project one screen shot: battle command"
          />
          <p className={classes.caption}>
            MEAN stack single page web app. Event finding and goal tracking{' '}
          </p>
          <a
            id="primary-project"
            target="_blank"
            href="https://github.com/rennzie/personal-tracking-app-ga-wdi-prj3"
            className={classes.icon}
            rel="noopener noreferrer"
          >
            <i className="fab fa-3x fa-github-square" />
          </a>
          <a
            id="primary-project"
            target="_blank"
            href="https://intense-beyond-35594.herokuapp.com/#!/"
            className={classes.icon}
            rel="noopener noreferrer"
          >
            <i className="fab fa-3x fa-chrome" />
          </a>
        </div>
        <div className={classes.projectCard}>
          <p className={classes.projectTitle}>Four: Grit</p>
          <img style={{ width: '100%' }} src={grit} alt="project one screen shot: battle command" />
          <p className={classes.caption}>
            MERN stack single page web app. Social fitness tracker community
          </p>
          <a
            id="primary-project"
            target="_blank"
            href="https://github.com/Rennzie/social-fitness-app-ga-wdi-prj4"
            className={classes.icon}
            rel="noopener noreferrer"
          >
            <i className="fab fa-3x fa-github-square" />
          </a>
          <a
            id="primary-project"
            target="_blank"
            href="https://grit-app.herokuapp.com/"
            className={classes.icon}
            rel="noopener noreferrer"
          >
            <i className="fab fa-3x fa-chrome" />
          </a>
        </div>
      </section>
    </section>
  );
}
