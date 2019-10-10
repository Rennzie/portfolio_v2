import React from 'react';
import { createUseStyles } from 'react-jss';
import { Machine } from 'xstate';
import { useMachine } from '@xstate/react';

import {
  NavDrawer,
  Profile,
  SkillsBar,
  ProjectStockman,
  ProjectStockmanProto,
  ProjectsGeneralAssembly,
  AboutThisPage,
  Footer
} from './components';

const navMachine = Machine({
  id: 'navMachine',
  initial: 'profile',
  states: {
    profile: {
      on: {
        PROJECTS: 'projects',
        SKILLS: 'skills',
        ABOUT: 'about'
      }
    },
    projects: {
      on: {
        PROFILE: 'profile',
        SKILLS: 'skills',
        ABOUT: 'about'
      }
    },
    skills: {
      on: {
        PROFILE: 'profile',
        PROJECTS: 'projects',
        ABOUT: 'about'
      }
    },
    about: {
      on: {
        PROFILE: 'profile',
        PROJECTS: 'projects',
        SKILLS: 'skills'
      }
    }
  }
});

const useStyles = createUseStyles({
  appWrapperGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr  1200px 1fr',
    gridTemplateRows: '2fr',
    '@media(max-width:720px)': {
      gridTemplateColumns: '1fr'
    }
  },
  bodyWrapperGrid: {
    gridColumnStart: '2',
    gridRowStart: '2',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    girdTemplateRows: 'repeat(6,1fr)',
    gridRowGap: '25px',
    gridTemplateRows: '1fr',

    '@media(max-width:720px)': {
      gridTemplateColumns: '1fr',
      gridTemplateRows: ''
    }
  }
});

function App() {
  const classes = useStyles();
  const [{ value: location }, send] = useMachine(navMachine);
  const handleNextLocation = (nextLocation: string) => () => send(nextLocation);

  return (
    <>
      <NavDrawer location={location} handleNextLocation={handleNextLocation} />
      {/* <section className={classes.bodyWrapperGrid}>
        <Profile />
        <ProjectStockman />
        <SkillsBar />
        <ProjectStockmanProto />
        <ProjectsGeneralAssembly />
        <AboutThisPage />
      </section> */}
    </>
  );
}

export default App;
