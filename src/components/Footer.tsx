import React from 'react';

import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from '..';
import bricksRight from '../assets/brick-orange-right.svg';
import bricksLeft from '../assets/brick-orange-left.svg';

const useStyles = createUseStyles((theme: Theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '250px'
  },
  footerText: {
    ...theme.typography.headerTertiary,
    alignSelf: 'center'
  }
}));

export default function Footer() {
  const theme = useTheme();
  const classes: any = useStyles({ theme });

  return (
    <footer className={classes.footer}>
      <img alt="brick svg" src={bricksLeft} />
      <p className={classes.footerText}>
        Built by Sean Rennie{' '}
        <span role="img" aria-label="builder emoji">
          👷
        </span>
        (10/2019)
      </p>
      <img alt="brick svg" src={bricksRight} />
    </footer>
  );
}
