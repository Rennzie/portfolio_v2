import React from 'react';
import { createUseStyles } from 'react-jss';

import profilePicture from '../assets/profile-picture-sean-small-sqr.jpg';
import { Grid, GridItem } from './BuildComponents';
import { Theme } from '..';

const useStyles = createUseStyles((theme: Theme) => ({
  contact: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  picWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profilePic: {
    borderRadius: '100%',
    width: '100%',
    height: 'auto'
  },
  header: {
    alignSelf: 'flex-start',
    ...theme.typography.headerPrimary,
    paddingBottom: 20
  },
  blurb: {
    alignSelf: 'flex-start',
    ...theme.typography.body,
    lineHeight: '30px',
    textAlign: 'justify',
    fontWeight: 'lighter',
    paddingBottom: 20
  },
  findMeOn: {
    width: '100%',
    alignSelf: 'flex-end',
    display: 'flex'
  },
  findMeOnIcon: {
    padding: 8,
    color: theme.palette.secondary.light,
    '&:hover': {
      color: theme.palette.secondary.main
    }
  },
  paragraph: {
    ...theme.typography.body,
    textAlign: 'justify'
  }
}));

export default function Profile() {
  const {
    contact,
    header,
    blurb,
    findMeOn,
    findMeOnIcon,
    picWrapper,
    profilePic,
    paragraph
  }: any = useStyles();

  return (
    <Grid templateRows="2fr 1fr">
      <GridItem columnSpan={6} className={contact}>
        <h2 className={header}>Hi I'm Sean. </h2>
        <h2 className={blurb}>Welcome to the my web development portfolio. </h2>
        <h2 className={blurb}>
          If you take one thing away from your visit, it should be that I love to build things!
        </h2>
        <h2 className={blurb}>
          If you would like to see more, have a look at my work or reach me on one of the channels
          below.
        </h2>
        <div className={findMeOn}>
          <a
            className={findMeOnIcon}
            href="https://github.com/Rennzie"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-3x fa-github-square" />
          </a>
          <a
            className={findMeOnIcon}
            href="https://www.linkedin.com/in/sean-rennie6/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-3x fa-linkedin" />
          </a>
          <a
            className={findMeOnIcon}
            href="https://stackoverflow.com/users/10132568/rennzie"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-3x fa-stack-overflow" />
          </a>
          <a
            className={findMeOnIcon}
            href="https://medium.com/@rnnsea001"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-3x fa-medium" />
          </a>
          <a className={findMeOnIcon} href="mailto:sean.rennie6@gmail.com">
            <i className="fas fa-3x fa-envelope" />
          </a>
        </div>
      </GridItem>
      <GridItem className={picWrapper} columnSpan={6}>
        <img className={profilePic} src={profilePicture} alt="head shot of me" />
      </GridItem>
      <GridItem columnSpan={12}>
        <p className={paragraph}>
          I’ve always built things - from small lego projects to pump-houses on my parents’ farm.
          That’s why I retrained as a web-developer, first teaching myself online through Codecademy
          and then taking General Assembly’s three month web development bootcamp.
        </p>
        <p className={paragraph}>
          I'm currently on the look out for a job in London, UK, where I'm keen to work for a
          world-class team. One where I bring my broad experience contribute as much as possible
          while learning as much as I can.
        </p>
      </GridItem>
    </Grid>
  );
}
