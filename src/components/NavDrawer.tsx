/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useTheme, createUseStyles } from 'react-jss';

import { Theme } from '../index';

import Logo from '../assets/sr-logo-bricks-tagline.svg';

const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: theme.palette.primary.light
  },
  logo: {
    width: '100%'
  },
  navCard: {
    width: '100%',
    padding: 16,
    borderBottom: `1px solid ${theme.palette.primary.dark}`,
    boxSizing: 'border-box',
    cursor: 'pointer',
    ...theme.typography.headerSecondary,
    '&:hover': {
      boxShadow: '0px 3px 5px #00000025 !important'
    },
    '&:first-child': {
      borderTop: `1px solid ${theme.palette.primary.dark}`
    }
  }
}));

type Props = {
  location: any;
  handleNextLocation: any;
};

export default function NavDrawer({ location, handleNextLocation }: Props) {
  const theme = useTheme();
  const classes: any = useStyles({ theme });

  //@ts-ignore
  const selected = theme.palette.secondary.light;

  return (
    <div className={classes.container}>
      <img className={classes.logo} src={Logo} alt="portfolio logo with bricks" />
      <section>
        <div
          onClick={handleNextLocation('PROFILE')}
          className={classes.navCard}
          style={{ backgroundColor: location === 'profile' ? selected : '' }}
        >
          Profile
        </div>
        <div
          onClick={handleNextLocation('PROJECTS')}
          className={classes.navCard}
          style={{ backgroundColor: location === 'projects' ? selected : '' }}
        >
          Projects
        </div>
        <div
          onClick={handleNextLocation('SKILLS')}
          className={classes.navCard}
          style={{ backgroundColor: location === 'skills' ? selected : '' }}
        >
          Skills
        </div>
        <div
          onClick={handleNextLocation('ABOUT')}
          className={classes.navCard}
          style={{ backgroundColor: location === 'about' ? selected : '' }}
        >
          About
        </div>
      </section>
    </div>
  );
}
