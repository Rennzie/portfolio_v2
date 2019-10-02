import React from 'react';
import { useTheme, createUseStyles } from 'react-jss';

import profilePicture from '../assets/profile-picture-sean-small-sqr.jpg';
import { Theme } from '..';

const useStyles = createUseStyles((theme: Theme) => ({
  gridWrapper: {
    maxWidth: theme.spacing.pageWidth.max,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gridTemplateRows: '1fr 1fr'
    // gridColumnGap: '5%',
    // boxSizing: 'border-box',
    // padding: '2% 5%'
    // minHeight: '100%'
  },
  bioWrapper: {
    gridColumnStart: 'span 2',
    padding: 16
  },
  picWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
    // height: '100%'
  },
  profilePic: {
    overflow: 'hidden',
    borderRadius: '100%',
    width: '100%',
    margin: '0 auto',
    padding: '16px',
    boxSizing: 'border-box'
  },
  header: {
    ...theme.typography.headerSecondary
  },
  contact: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  findMeOn: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '35%'
  },
  findMeOnIcon: {
    color: 'grey',
    '&:hover': {
      color: theme.colorPrimary
    }
  },
  constactEmail: {
    textDecoration: 'none',
    color: 'black',
    ...theme.typography.body
  },
  paragraph: {
    ...theme.typography.body
  }
}));

export default function Profile() {
  const theme = useTheme();
  const classes: any = useStyles({ theme });

  return (
    <main className={classes.gridWrapper}>
      <div className={classes.picWrapper}>
        <img className={classes.profilePic} src={profilePicture} alt="head shot of me" />
      </div>

      <section className={classes.contact}>
        <h2 className={classes.header}>Hi I'm Sean and I love to build things</h2>

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
        <a className={classes.constactEmail} href="mailto:sean.rennie6@gmail.com">
          sean.rennie6@gmail.com
        </a>
      </section>

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
