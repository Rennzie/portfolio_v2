/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from '..';

import Button from './Button';
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

  caption: {
    ...theme.typography.caption,
    padding: '20px 0px'
  },
  projects: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  projectCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
    width: '25%',
    minWidth: 200,
    maxWidth: 250,
    padding: 10,
    margin: '10px 5px',
    boxSizing: 'border-box',
    border: `2px solid ${theme.palette.primary.main}`
  },
  projectHead: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  },
  projectTitle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    ...theme.typography.headerTertiary,
    paddingBottom: 0,
    '& p:first-child': {
      paddingBottom: 12
    },
    '& p:last-child': {
      fontWeight: 'normal!important'
      // color: 'red'
    }
  },
  projectImage: {
    width: '100%'
  },
  projectIcons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
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
        <Button onClick={goBack}>BACK</Button>
      </div>
      <p className={classes.blurb}>
        While at General Assembly in 2018 I completed four projects over the three months of the{' '}
        <span>
          <a
            href="https://generalassemb.ly/education/software-engineering-immersive/paris"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'black' }}
          >
            Web Development Immersive
          </a>
        </span>
        . The aim was to put into practice what we had learned in the classroom. The projects
        represent a progression from vanilla Javascript through to full-stack RESTful web apps
        written with modern frameworks like AngularJS and React. Check out the project pages or the
        README's on Github.
      </p>

      {/*-----------------------
          PROJECT ONE
        ------------------------ */}
      <section className={classes.projects}>
        <div className={classes.projectCard}>
          <div className={classes.projectHead}>
            <div className={classes.projectTitle}>
              <p>Project One</p>
              <p>Battle Command</p>
            </div>
            <div className={classes.projectIcons}>
              <a
                id="primary-project"
                target="_blank"
                href="https://github.com/rennzie/two-person-shooter-game-ga-wdi-prj1"
                className={classes.icon}
                rel="noopener noreferrer"
              >
                <i className="fab fa-lg fa-github-square" />
              </a>
              <a
                id="primary-project"
                target="_blank"
                href="http://seanrennie.com/two-person-shooter-game-ga-wdi-prj1"
                className={classes.icon}
                rel="noopener noreferrer"
              >
                <i className="fab fa-lg fa-chrome" />
              </a>
            </div>
          </div>
          <p className={classes.caption}>
            A multi-player shooter game built with vanilla Javascript, CSS and HTML.
          </p>
          <img
            className={classes.projectImage}
            src={battleCommand}
            alt="project one screen shot: battle command"
          />
        </div>

        {/*-----------------------
            PROJECT TWO
        ------------------------ */}
        <div className={classes.projectCard}>
          <div className={classes.projectHead}>
            <div className={classes.projectTitle}>
              <p>Project Two:</p>
              <p>Nice Rocks</p>
            </div>
            <div className={classes.projectIcons}>
              <a
                id="primary-project"
                target="_blank"
                href="https://github.com/rennzie/geotourism-reviewpage-ga-wdi-prj2"
                className={classes.icon}
                rel="noopener noreferrer"
              >
                <i className="fab fa-lg fa-github-square" />
              </a>
              <a
                id="primary-project"
                target="_blank"
                href="https://nice-rocks.herokuapp.com/"
                className={classes.icon}
                rel="noopener noreferrer"
              >
                <i className="fab fa-lg fa-chrome" />
              </a>
            </div>
          </div>
          <p className={classes.caption}>
            A geological tourism review site built as a full-stack Express.js web app.
          </p>
          <img
            className={classes.projectImage}
            src={niceRocks}
            alt="project two screen shot: nice rocks"
          />
        </div>

        {/*-----------------------
            PROJECT THREE
        ------------------------ */}
        <div className={classes.projectCard}>
          <div className={classes.projectHead}>
            <div className={classes.projectTitle}>
              <p>Project Three</p>
              <p>Resolut</p>
            </div>
            <div className={classes.projectIcons}>
              <a
                id="primary-project"
                target="_blank"
                href="https://github.com/rennzie/personal-tracking-app-ga-wdi-prj3"
                className={classes.icon}
                rel="noopener noreferrer"
              >
                <i className="fab fa-lg fa-github-square" />
              </a>
              <a
                id="primary-project"
                target="_blank"
                href="https://intense-beyond-35594.herokuapp.com/#!/"
                className={classes.icon}
                rel="noopener noreferrer"
              >
                <i className="fab fa-lg fa-chrome" />
              </a>
            </div>
          </div>
          <p className={classes.caption}>
            Goal tracking and event finder built with AngularJS, Express and MongoDB.
          </p>
          <img
            className={classes.projectImage}
            src={resolut}
            alt="project one screen shot: battle command"
          />
        </div>

        {/*-----------------------
            PROJECT FOUR
        ------------------------ */}
        <div className={classes.projectCard}>
          <div className={classes.projectHead}>
            <div className={classes.projectTitle}>
              <p>Project Four</p>
              <p>Grit</p>
            </div>
            <div className={classes.projectIcons}>
              <a
                id="primary-project"
                target="_blank"
                href="https://github.com/Rennzie/social-fitness-app-ga-wdi-prj4"
                className={classes.icon}
                rel="noopener noreferrer"
              >
                <i className="fab fa-lg fa-github-square" />
              </a>
              <a
                id="primary-project"
                target="_blank"
                href="https://grit-app.herokuapp.com/"
                className={classes.icon}
                rel="noopener noreferrer"
              >
                <i className="fab fa-lg fa-chrome" />
              </a>
            </div>
          </div>
          <p className={classes.caption}>
            Social fitness community for tracking exercise progress for your tribe. Built with
            React, Express and MongoDB.
          </p>
          <img
            className={classes.projectImage}
            src={grit}
            alt="project one screen shot: battle command"
          />
        </div>
      </section>
    </section>
  );
}
