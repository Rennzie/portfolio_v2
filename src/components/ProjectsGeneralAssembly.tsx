import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from '..';

import battleCommand from '../assets/battle-command-board-cropped-1200x1200.png';
import niceRocks from '../assets/nice-rocks-show-page-cropped-1200x1200.png';
import resolut from '../assets/resolute-cropped-1200x1200.png';
import grit from '../assets/grit-dashboard-cropped-1200x1200.png';

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
  },
  screenShots: {
    width: '80%'
  },
  section: {
    borderBottom: `2px solid ${theme.colorPrimary}`
  },
  projects: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  projectCard: {
    width: '23%',
    padding: 16,
    border: '1px solid #e0e0e0'
  },
  '&::hover': {
    boxShadow: '1px 5px 2px 2px #e0e0e0'
  }
}));

export default function ProjectsGeneralAssembly() {
  const theme = useTheme();
  const classes: any = useStyles({ theme });
  return (
    <section className={classes.section}>
      <h2 className={classes.header}>General Assembly, London</h2>
      <p className={classes.blurb}>
        While at the General Assembly in 2018 we completed 4 projects over the three months of the
        web development immersive. The aim was to put into practice what we had learned in the
        classroom in the previous weeks. The projects represent a progression from vanilla
        Javascript, CSS and HTML with “Battle Command” through to a full-stack RESTful MERN app with
        Grit. Click each to see the README for each project on Github.
      </p>

      <section className={classes.projects}>
        <div className={classes.projectCard}>
          <p className={classes.blurb}>Project 1: Battle Command</p>
          <img
            style={{ width: '100%' }}
            src={battleCommand}
            alt="project one screen shot: battle command"
          />
          <p className={classes.blurb}>Vanilla JS, CSS and HTML app. Multiplater shooter game</p>
        </div>
        <div className={classes.projectCard}>
          <p className={classes.blurb}>Project 2: Nice Rocks</p>
          <img
            style={{ width: '100%' }}
            src={niceRocks}
            alt="project one screen shot: battle command"
          />
          <p className={classes.blurb}>Vanilla JS, CSS and HTML app. Multiplater shooter game</p>
        </div>
        <div className={classes.projectCard}>
          <p className={classes.blurb}>Project 3: Resolut</p>
          <img
            style={{ width: '100%' }}
            src={resolut}
            alt="project one screen shot: battle command"
          />
          <p className={classes.blurb}>Vanilla JS, CSS and HTML app. Multiplater shooter game</p>
        </div>
        <div className={classes.projectCard}>
          <p className={classes.blurb}>Project 4: Grit</p>
          <img style={{ width: '100%' }} src={grit} alt="project one screen shot: battle command" />
          <p className={classes.blurb}>Vanilla JS, CSS and HTML app. Multiplater shooter game</p>
        </div>
      </section>
    </section>
  );
}
