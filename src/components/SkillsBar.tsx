import React, { CSSProperties } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from '..';

const useStyles = createUseStyles({
  skillsAndTech: {
    gridRowStart: 'span 2'
  },
  skillThermometer: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  thermometer: {
    height: 1000,
    width: 25,
    background: 'linear-gradient(0deg, rgba(250,217,97,1) 0%, rgba(247,107,28,1) 100%)',
    borderRadius: 12.5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    aligItems: 'center'
  },
  thermoText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    transform: 'rotate(-90deg) '
  },
  skills: {
    height: 1000,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    aligItems: 'center'
  },
  skill: {
    fontFamily: 'Roboto Mono',
    paddingBottom: '10px',
    fontWeight: 'light'
  }
});

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
    { icon: 'devicon-gitlab-plain', name: 'CI / CD(Gitlab)' },
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
    { icon: 'fab fa-python', name: 'Python' }
  ]
];

export default function SkillsBar() {
  //@ts-ignore
  const theme: Theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <aside className={classes.skillsAndTech}>
      <h2 style={{ ...theme.typography.headerSecondary } as CSSProperties}>Skills and Tech</h2>
      <div className={classes.skillThermometer}>
        <div className={classes.thermometer}>
          <h6 className={classes.thermoText}>Confident</h6>
          <h6 className={classes.thermoText}>Comfortable</h6>
          <h6 className={classes.thermoText}>Learning</h6>
        </div>
        <div className={classes.skills}>
          {skills.map(skillSet => (
            <div>
              {skillSet.map(skill => (
                <p className={classes.skill}>
                  <i className={skill.icon} /> {skill.name}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
