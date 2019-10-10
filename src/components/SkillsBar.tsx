import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from '..';

const useStyles = createUseStyles((theme: Theme) => ({
  header: {
    ...theme.typography.headerPrimary,
    paddingBottom: 20
  },
  blurb: {
    ...theme.typography.body,
    paddingBottom: 20,
    textAlign: 'justify'
  },
  skillThermometer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thermometer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
    width: '100%',
    marginBottom: '30px',
    background: 'linear-gradient(90deg, rgba(250,217,97,1) 0%, rgba(247,107,28,1) 100%)',
    borderRadius: 20
  },
  thermoText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
    // transform: 'rotate(-90deg) '
  },
  skills: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  skillSet: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column'
  },
  skill: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start',
    paddingBottom: 14,
    paddingLeft: 50
    // alignItems: 'f'
  },
  skillIcon: {
    width: '10%',
    alignSelf: 'flex-end'
  },
  skillText: {
    fontFamily: 'Roboto Mono',
    fontWeight: 'light'
  }
}));

type Skill = { icon: string; name: string };

const skills: Skill[][] = [
  [
    { icon: 'fab fa-html5', name: 'HTML' },
    { icon: 'fab fa-css3', name: 'CSS' },
    { icon: 'fab fa-react', name: 'React' },
    { icon: 'fab fa-js-square', name: 'JavaScript' }
  ],
  [
    { icon: '', name: 'React Router' },
    { icon: 'devicon-typescript-plain', name: 'Typescript' },
    { icon: '', name: 'Apollo GraphQL' },
    { icon: '', name: 'Material-UI' },
    { icon: 'devicon-gitlab-plain', name: 'CI/CD (Gitlab)' },
    { icon: 'fas fa-map-marked-alt', name: 'Google Maps JS API' },
    { icon: '', name: 'Knex.js' },
    { icon: 'devicon-webpack-plain', name: 'Webpack' },
    { icon: 'devicon-sass-original', name: 'SASS(SCSS)' },
    { icon: 'devicon-express-original', name: 'Express' },
    { icon: 'devicon-mongodb-plain', name: 'MongoDB' },
    { icon: 'devicon-babel-plain', name: 'Babel' },
    { icon: '', name: 'Serverless' },
    { icon: '', name: 'PWA’s' },
    { icon: 'fab fa-node-js', name: 'Node' },
    { icon: '', name: 'Jest' },
    { icon: 'devicon-jquery-plain', name: 'jQuery' }
  ],
  [
    { icon: 'fab fa-aws', name: 'AWS' },
    { icon: '', name: 'Lambda' },
    { icon: '', name: 'Redux' },
    { icon: 'devicon-postgresql-plain', name: 'PostgresSQL' },
    { icon: 'devicon-angularjs-plain', name: 'AngularJS' },
    { icon: 'devicon-mocha-plain', name: 'Mocha' },
    { icon: '', name: 'Chai' },
    { icon: '', name: 'Service-workers' },
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fab fa-react', name: 'React Native' }
  ]
];

export default function SkillsBar() {
  //@ts-ignore
  const theme: Theme = useTheme();
  const classes: any = useStyles({ theme });
  return (
    <section className={classes.skillsAndTech}>
      <h2 className={classes.header}>Skills and Tech</h2>
      {/* <p className={classes.blurb}>The techonologies and skills I'm familiar with.</p> */}
      <div className={classes.skillThermometer}>
        <div className={classes.thermometer}>
          <h6 className={classes.thermoText}>Confident</h6>
          <h6 className={classes.thermoText}>Comfortable</h6>
          <h6 className={classes.thermoText}>Learning</h6>
        </div>

        <div className={classes.skills}>
          {skills.map(skillSet => (
            <div className={classes.skillSet}>
              {skillSet.map(skill => (
                <div className={classes.skill}>
                  <div className={classes.skillIcon}>
                    <i className={skill.icon} />
                  </div>
                  <p className={classes.skillText}>{skill.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
//
