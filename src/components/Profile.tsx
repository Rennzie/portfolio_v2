import React from 'react';
import { useTheme, createUseStyles } from 'react-jss';

import profilePicture from '../assets/profile-picture-sean-small-sqr.jpg';
import { Theme } from '..';

const useStyles = createUseStyles((theme: Theme) => ({
  gridWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5 1fr)',
    gridTemplateRows: 'repeat(5 1fr)',
    gridRowGap: 40
  },
  contact: {
    gridColumnStart: 'span 3',
    gridRowStart: 'span 2',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center'
  },
  picWrapper: {
    gridColumnStart: 'span 2',
    gridRowStart: 'span 2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },

  findMeOn: {
    gridColumnStart: 'span 3',
    gridRowStart: '3',
    width: '100%',
    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
    // width: '35%'
  },
  bioWrapper: {
    gridColumnStart: 'span 5',
    gridRowStart: '2 span 2'
    // paddingTop: 20
  },
  profilePic: {
    borderRadius: '100%',
    width: 300,
    height: 'auto'
  },
  header: {
    alignSelf: 'flex-start',
    ...theme.typography.headerPrimary,
    paddingBottom: 20
  },
  blurb: {
    ...theme.typography.headerTertiary,
    lineHeight: '2rem'
    // textAlign: 'center'
  },
  contactEmail: {
    gridColumnStart: 'span 2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'white',
    borderRadius: 9,
    fontFamily: 'Roboto',
    fontSize: 18,
    backgroundColor: theme.palette.secondary.light,
    '&:hover': {
      textDecoration: 'underline',
      backgroundColor: theme.palette.secondary.main
    }
  },
  findMeOnIcon: {
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
  const theme = useTheme();
  const classes: any = useStyles({ theme });

  return (
    <main className={classes.gridWrapper}>
      <section className={classes.contact}>
        <h2 className={classes.header}>Hi I'm Sean. </h2>
        <h2 className={classes.blurb}>
          Welcome to the my web development portfolio. If you take one thing away from your visit,
          it should be that I love to build things! If you would like to see more, you cant reach me
          on one of the channels below:
        </h2>
      </section>

      <div className={classes.picWrapper}>
        <img className={classes.profilePic} src={profilePicture} alt="head shot of me" />
      </div>

      <div className={classes.findMeOn}>
        <a
          className={classes.findMeOnIcon}
          href="https://github.com/Rennzie"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-3x fa-github-square" />
        </a>
        <a
          className={classes.findMeOnIcon}
          href="https://www.linkedin.com/in/sean-rennie6/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-3x fa-linkedin" />
        </a>
        <a
          className={classes.findMeOnIcon}
          href="https://stackoverflow.com/users/10132568/rennzie"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-3x fa-stack-overflow" />
        </a>
        <a
          className={classes.findMeOnIcon}
          href="https://medium.com/@rnnsea001"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-3x fa-medium" />
        </a>
      </div>
      <a className={classes.contactEmail} href="mailto:sean.rennie6@gmail.com">
        sean.rennie6@gmail.com
      </a>
      <section className={classes.bioWrapper}>
        <p className={classes.paragraph}>
          Working as an exploration geologist in West Africa for 5 years taught me to break big
          problems into many little ones. It gave me communication skills (I learned French) and
          taught me how to manage a team and deliver to stakeholders. While I miss the
          problem-solving element of exploring, it never quite satisfied my love of building things.
        </p>
        <p className={classes.paragraph}>
          I’ve always built things - from small lego projects to pump-houses on my parents’ farm.
          That’s why I retrained as a web-developer, first teaching myself online through Codecademy
          and then taking General Assembly’s three month web-dev bootcamp.{' '}
        </p>
        <p className={classes.paragraph}>
          Web-dev brought me to building my own agritech start-up with my wife in our spare bedroom.
          It’s been great but we’re pausing our efforts and now I’m looking to join a world-class
          product team. One where I can learn, grow and keep building top quality products that
          people love.
        </p>
      </section>
    </main>
  );
}
