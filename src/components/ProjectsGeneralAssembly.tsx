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
  header: {
    paddingBottom: 20,
    ...theme.typography.headerPrimary
  },
  blurb: {
    ...theme.typography.body,
    alignText: 'justify',
    paddingBottom: 30
  },
  projectTitle: {
    ...theme.typography.headerTertiary
  },
  caption: {
    ...theme.typography.caption
  },
  projects: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  projectCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    width: '22%',
    minWidth: '22%',
    padding: 10,
    margin: 10,
    boxSizing: 'border-box',
    border: `2px solid ${theme.palette.primary.main}`
  },
  projectImage: {
    width: '100%'
  },
  icon: {
    cursor: 'pointer',
    color: theme.palette.secondary.light,
    '&:hover': {
      color: theme.palette.secondary.main
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
        While at the General Assembly in 2018 I completed four projects over the three months of the
        web development immersive. The aim was to put into practice what we had learned in the
        classroom. The projects represent a progression from vanilla Javascript through to
        full-stack RESTful web apps written with modern frameworks like AngularJS and React.
      </p>

      <section className={classes.projects}>
        <div className={classes.projectCard}>
          <p className={classes.projectTitle}>Project One</p>
          <p className={classes.projectTitle}>Battle Command</p>
          <img
            className={classes.projectImage}
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
            <i className="fab fa-2x fa-github-square" />
          </a>
          <a
            id="primary-project"
            target="_blank"
            href="http://seanrennie.com/two-person-shooter-game-ga-wdi-prj1"
            className={classes.icon}
            rel="noopener noreferrer"
          >
            <i className="fab fa-2x fa-chrome" />
          </a>
        </div>
        <div className={classes.projectCard}>
          <p className={classes.projectTitle}>Project Two</p>
          <p className={classes.projectTitle}>Nice Rocks</p>
          <img
            className={classes.projectImage}
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
            <i className="fab fa-2x fa-github-square" />
          </a>
          <a
            id="primary-project"
            target="_blank"
            href="https://nice-rocks.herokuapp.com/"
            className={classes.icon}
            rel="noopener noreferrer"
          >
            <i className="fab fa-2x fa-chrome" />
          </a>
        </div>
        <div className={classes.projectCard}>
          <p className={classes.projectTitle}>Project Three</p>
          <p className={classes.projectTitle}>Resolut</p>
          <img
            className={classes.projectImage}
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
            <i className="fab fa-2x fa-github-square" />
          </a>
          <a
            id="primary-project"
            target="_blank"
            href="https://intense-beyond-35594.herokuapp.com/#!/"
            className={classes.icon}
            rel="noopener noreferrer"
          >
            <i className="fab fa-2x fa-chrome" />
          </a>
        </div>
        <div className={classes.projectCard}>
          <p className={classes.projectTitle}>Project Four</p>
          <p className={classes.projectTitle}>Grit</p>
          <img
            className={classes.projectImage}
            src={grit}
            alt="project one screen shot: battle command"
          />
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
            <i className="fab fa-2x fa-github-square" />
          </a>
          <a
            id="primary-project"
            target="_blank"
            href="https://grit-app.herokuapp.com/"
            className={classes.icon}
            rel="noopener noreferrer"
          >
            <i className="fab fa-2x fa-chrome" />
          </a>
        </div>
      </section>
    </section>
  );
}
