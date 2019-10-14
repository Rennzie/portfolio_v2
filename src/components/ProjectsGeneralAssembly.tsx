/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { createUseStyles } from 'react-jss';

import { Theme } from '..';
import { Button, Grid, GridItem, Tags, Tag } from './BuildComponents';
import battleCommand from '../assets/battle-command-board-cropped-1200x1200.png';
import niceRocks from '../assets/nice-rocks-show-page-cropped-1200x1200.png';
import resolut from '../assets/resolute-cropped-1200x1200.png';
import grit from '../assets/grit-dashboard-cropped-1200x1200.png';

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
    ...theme.typography.body,
    alignText: 'justify'
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
    alignItems: 'flex-start',
    padding: 10,
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
  },
  tech: {
    alignSelf: 'flex-start',
    ...theme.typography.body,
    paddingTop: 16,
    paddingBottom: 0
  }
}));

type Props = {
  goBack: () => void;
};

export default function ProjectsGeneralAssembly({ goBack }: Props) {
  const classes: any = useStyles();
  return (
    <Grid>
      {/*-----------------------
          HEADER
        ------------------------ */}
      <GridItem columnSpan={12} className={classes.head}>
        <h2 className={classes.header}>General Assembly, London</h2>
        <Button onClick={goBack}>BACK</Button>
      </GridItem>

      {/*-----------------------
          BLURB
        ------------------------ */}
      <GridItem columnSpan={12}>
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
          written with modern frameworks like AngularJS and React. Check out the project pages or
          the README's on Github.
        </p>
      </GridItem>

      {/*-----------------------
          PROJECT ONE
        ------------------------ */}
      <GridItem columnSpan={6} className={classes.projectCard}>
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
              <i className="fas fa-lg fa-external-link-square-alt" />
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
        <h6 className={classes.tech}>Technologies</h6>
        <Tags>
          <Tag>javascript</Tag>
          <Tag>sass(scss)</Tag>
          <Tag>html5</Tag>
          <Tag>jquery</Tag>
          <Tag>github-pages</Tag>
        </Tags>
      </GridItem>

      {/*-----------------------
            PROJECT TWO
        ------------------------ */}
      <GridItem columnSpan={6} className={classes.projectCard}>
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
              <i className="fas fa-lg fa-external-link-square-alt" />
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
        <h6 className={classes.tech}>Technologies</h6>
        <Tags>
          <Tag>express</Tag>
          <Tag>mongoose</Tag>
          <Tag>mongodb</Tag>
          <Tag>ejs</Tag>
          <Tag>bulma</Tag>
          <Tag>bcrypt</Tag>
          <Tag>bluebird</Tag>
          <Tag>heroku</Tag>
        </Tags>
      </GridItem>

      {/*-----------------------
            PROJECT THREE
        ------------------------ */}
      <GridItem columnSpan={6} className={classes.projectCard}>
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
              <i className="fas fa-lg fa-external-link-square-alt" />
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
        <h6 className={classes.tech}>Technologies</h6>
        <Tags>
          <Tag>@uirouter/angular</Tag>
          <Tag>angularJS</Tag>
          <Tag>bcrypt</Tag>
          <Tag>bluebird</Tag>
          <Tag>bulma</Tag>
          <Tag>chart.js</Tag>
          <Tag>express</Tag>
          <Tag>moment</Tag>
          <Tag>jwt</Tag>
          <Tag>mongoose</Tag>
          <Tag>mongodb</Tag>
          <Tag>chai</Tag>
          <Tag>mocha</Tag>
          <Tag>satellizer</Tag>
          <Tag>heroku</Tag>
        </Tags>
      </GridItem>

      {/*-----------------------
            PROJECT FOUR
        ------------------------ */}
      <GridItem columnSpan={6} className={classes.projectCard}>
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
              <i className="fas fa-lg fa-external-link-square-alt" />
            </a>
          </div>
        </div>
        <p className={classes.caption}>
          Social fitness community for tracking exercise progress for your tribe. Built with React,
          Express and MongoDB.
        </p>
        <img
          className={classes.projectImage}
          src={grit}
          alt="project one screen shot: battle command"
        />
        <h6 className={classes.tech}>Technologies</h6>
        <Tags>
          <Tag>react</Tag>
          <Tag>express</Tag>
          <Tag>axios</Tag>
          <Tag>bcrypt</Tag>
          <Tag>bluebird</Tag>
          <Tag>lodash</Tag>
          <Tag>mocha</Tag>
          <Tag>chai</Tag>
          <Tag>react-router</Tag>
          <Tag>mongoose</Tag>
          <Tag>mongodb</Tag>
          <Tag>react-chart-js</Tag>
          <Tag>webpack</Tag>
          <Tag>bulma</Tag>
          <Tag>jwt</Tag>
          <Tag>heroku</Tag>
        </Tags>
      </GridItem>
    </Grid>
  );
}
