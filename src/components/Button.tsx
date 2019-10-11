/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from '..';

const useStyles = createUseStyles((theme: Theme) => ({
  button: {
    border: `2px solid ${theme.palette.secondary.light}`,
    borderRadius: 10,
    cursor: 'pointer',
    // textDecoration: 'underline',
    // backgroundColor: 'none',
    padding: 8,
    fontSize: '16',
    fontFamily: 'Roboto',
    color: theme.palette.secondary.light,
    '&:hover': {
      boxShadow: '0px 3px 5px #00000025 '
    }
  }
}));

type ButtonProps = {
  onClick: any;
  title?: string;
  children?: React.ReactNode;
};

export default function Button({ onClick, title, children }: ButtonProps) {
  const theme = useTheme();
  const classes: any = useStyles({ theme });
  return (
    <div className={classes.button} onClick={onClick}>
      {children || title}
    </div>
  );
}
