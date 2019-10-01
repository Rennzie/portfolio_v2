import React from 'react';
import { useTheme, createUseStyles } from 'react-jss';

import profilePicture from '../assets/profile-picture-sean-small-sqr.jpg';
import { Theme } from '..';

const useStyles = createUseStyles((theme: Theme) => ({
  profilePic: {
    overflow: 'hidden',
    borderRadius: '100%',
    width: '100%'
  },
  paragraph: {
    ...theme.typography.body
  }
}));

export default function Profile() {
  const theme = useTheme();
  console.log(theme);
  const classes: any = useStyles({ theme });

  return (
    <section>
      <img className={classes.profilePic} src={profilePicture} alt="head shot of me" />

      <p className={classes.paragraph}>
        Working as an exploration geologist in West Africa for 5 years taught me to break big
        problems into many little ones. It gave me communication skills (I learned French) and
        taught me how to manage a team and deliver to stakeholders. While I miss the problem-solving
        element of exploring, it never quite satisfied my love of building things.
      </p>
      <p className={classes.paragraph}>
        I’ve always built things - from small lego projects to pump-houses on my parents’ farm.
        That’s why I retrained as a web-developer, first teaching myself online through Codecademy
        and then taking General Assembly’s three month web-dev bootcamp.{' '}
      </p>
      <p className={classes.paragraph}>
        Web-dev brought me to building my own agritech start-up with my wife in our spare bedroom.
        It’s been great but we’re pausing our efforts and now I’m looking to join a world-class
        product team. One where I can learn, grow and keep building top quality products that people
        love.
      </p>
    </section>
  );
}
