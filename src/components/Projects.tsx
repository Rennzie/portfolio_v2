import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from '..';

import stockmanLogo from '../assets/TS-App-icon2.png';
import generalAssemblyLogo from '../assets/general-assembly-logo.png';

const useStyles = createUseStyles((theme: Theme) => ({
  header: {
    ...theme.typography.headerPrimary
  },
  projectList: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  projectCard: {
    // backgroundColor: `${theme.palette.primary.main}75`,
    backgroundColor: theme.palette.primary.main,
    height: '20%',
    padding: 20
  },
  projectHead: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 20
  },
  projectTitle: {
    ...theme.typography.headerSecondary
  },
  projectBlurb: {
    ...theme.typography.body
  }
}));

export default function Projects() {
  //@ts-ignore
  const theme: Theme = useTheme();
  const classes: any = useStyles({ theme });
  return (
    <>
      <h2 className={classes.header}>Projects</h2>
      <section className={classes.projectList}>
        {/* -----------------
            THE STOCKMAN
            ----------------- */}
        <div className={classes.projectCard}>
          <div className={classes.projectHead}>
            <img
              style={{ width: 50, paddingRight: 20 }}
              src={stockmanLogo}
              alt="logo for the stockman app"
            />
            <h2 className={classes.projectTitle}>The Stockman</h2>
          </div>

          <p className={classes.projectBlurb}>
            A livestock management SaaS platform. Helping farmers manage there herd grazing plan
            with a map of their farms.
          </p>
        </div>

        {/* -------------------------------
            LIVESTOCK MANAGEMENT PROTOTYPE
            ------------------------------ */}
        <div className={classes.projectCard}>
          <div className={classes.projectHead}>
            <h2 className={classes.projectTitle}>Livestock management prototype</h2>
          </div>
          <p className={classes.projectBlurb}>
            A livestock management prototype application. This is the precursor to what became The
            Stockman.
          </p>
        </div>

        {/* -----------------
            GENERAL ASSEMBLY 
            ----------------- */}
        <div className={classes.projectCard}>
          <div className={classes.projectHead}>
            <img
              style={{ width: 50, paddingRight: 20 }}
              src={generalAssemblyLogo}
              alt="logo for the general assembly"
            />
            <h2 className={classes.projectTitle}>General Assembly</h2>
          </div>
          <p className={classes.projectBlurb}>
            I completed four projects while doing General Assembly's Web Development Immersive over
            a three month period.
          </p>
        </div>
      </section>
    </>
  );
}
