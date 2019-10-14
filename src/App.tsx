import React from 'react';
import { createUseStyles } from 'react-jss';
import { Machine } from 'xstate';
import { useMachine } from '@xstate/react';

import { Contact, NavDrawer, Profile, SkillsBar, Projects, AboutThisPage } from './components';

const navMachine = Machine({
  id: 'navMachine',
  initial: 'contact',
  states: {
    profile: {
      on: {
        PROJECTS: 'projects',
        SKILLS: 'skills',
        CONTACT: 'contact',
        ABOUT: 'about'
      }
    },
    projects: {
      on: {
        PROFILE: 'profile',
        SKILLS: 'skills',
        CONTACT: 'contact',
        ABOUT: 'about'
      }
    },
    skills: {
      on: {
        PROFILE: 'profile',
        PROJECTS: 'projects',
        CONTACT: 'contact',
        ABOUT: 'about'
      }
    },
    about: {
      on: {
        PROFILE: 'profile',
        PROJECTS: 'projects',
        CONTACT: 'contact',
        SKILLS: 'skills'
      }
    },
    contact: {
      on: {
        PROFILE: 'profile',
        ABOUT: 'about',
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
    // padding: 60,
    overflow: 'scroll'
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
          {location === 'projects' && <Projects />}
          {location === 'skills' && <SkillsBar />}
          {location === 'about' && <AboutThisPage />}
          {location === 'contact' && <Contact />}
        </section>
      </main>
    </>
  );
}

export default App;
