import React from 'react';
import { createUseStyles } from 'react-jss';

import { Grid, GridItem } from './BuildComponents';
import { Theme } from '..';

const useStyles = createUseStyles((theme: Theme) => ({
  header: {
    alignSelf: 'flex-start',
    ...theme.typography.headerPrimary,
    paddingBottom: 20
  },
  findMeOn: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.secondary.light,
    '&:hover': {
      color: theme.palette.secondary.main
    }
  },
  findMeOnIcon: {
    padding: 8
  }
}));

export default function Contact() {
  const { header, findMeOn, findMeOnIcon }: any = useStyles();
  return (
    <Grid>
      <GridItem columnSpan={12}>
        <h2 className={header}>Contact Me</h2>
      </GridItem>

      <GridItem className={findMeOn} columnSpan={12}>
        <a
          className={findMeOn}
          href="https://github.com/Rennzie"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className={`fab fa-2x fa-github-square ${findMeOnIcon}`} />
          <p>Github | github.com/Rennzie</p>
        </a>
      </GridItem>

      <GridItem columnSpan={12}>
        <a
          className={findMeOn}
          href="https://www.linkedin.com/in/sean-rennie6/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className={`fab fa-2x fa-linkedin ${findMeOnIcon}`} />
          <p>LinkedIn | www.linkedin.com/in/sean-rennie6/</p>
        </a>
      </GridItem>
      <GridItem columnSpan={12}>
        <a
          className={findMeOn}
          href="https://stackoverflow.com/users/10132568/rennzie"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className={`fab fa-2x fa-stack-overflow  ${findMeOnIcon}`} />
          <p>Stack Overflow | stackoverflow.com/users/10132568/rennzie</p>
        </a>
      </GridItem>
      <GridItem columnSpan={6}>
        <a
          className={findMeOn}
          href="https://medium.com/@rnnsea001"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className={`fab fa-2x fa-medium ${findMeOnIcon}`} />
          <p>Medium | medium.com/@rnnsea001</p>
        </a>
      </GridItem>
      <GridItem columnSpan={12}>
        <a className={findMeOn} href="mailto:sean.rennie6@gmail.com">
          <i className={`fas fa-2x fa-envelope ${findMeOnIcon}`} />
          <p>Email | sean.rennie6@gmail.com</p>
        </a>
      </GridItem>
    </Grid>
  );
}
