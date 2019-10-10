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
    gridTemplateColumns: '1fr  3fr'
  },
  pages: {
    height: '100vh',
    boxSizing: 'border-box',
    padding: 70
  }
});

function App() {
  const classes = useStyles();
  const [{ value: location }, send] = useMachine(navMachine);
  const handleNextLocation = (nextLocation: string) => () => send(nextLocation);

  return (
    <>
      <main className={classes.appWrapperGrid}>
        <NavDrawer location={location} handleNextLocation={handleNextLocation} />
        <section className={classes.pages}>
          {location === 'profile' && <Profile />}
          {/* <ProjectStockman /> */}
          {location === 'skills' && <SkillsBar />}
          {location === 'about' && <AboutThisPage />}
          {/* <ProjectStockmanProto />
          <ProjectsGeneralAssembly />
          <AboutThisPage /> */}
        </section>
      </main>
    </>
  );
}

export default App;
