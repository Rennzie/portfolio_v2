import React from 'react';
import { useTheme, createUseStyles } from 'react-jss';

import { Theme } from '../index';

import Logo from '../assets/sr-logo-bricks-tagline.svg';

const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    gridColumnStart: '2',
    height: '100vh',
    width: '100vw',
    maxWidth: 1200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // margin: '0 auto,
    borderBottom: `2px solid ${theme.colorPrimary}`
  },
  logo: {
    width: '100%'
  }
}));

export default function LandingZone() {
  const theme = useTheme();
  const classes: any = useStyles({ theme });

  return (
    <div className={classes.container}>
      <img className={classes.logo} src={Logo} alt="porfolio logo with bricks" />
      <div>V</div>
    </div>
  );
}
