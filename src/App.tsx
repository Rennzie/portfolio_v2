import React from 'react';
import { createUseStyles } from 'react-jss';

import {
  LandingZone,
  Profile,
  SkillsBar,
  ProjectStockman,
  ProjectStockmanProto,
  ProjectsGeneralAssembly
} from './components';

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
    gridTemplateColumns: '900px 1fr',
    gridTemplateRows: '1fr',
    gridRowGap: '25px'
  }
});

function App() {
  const classes = useStyles();
  return (
    <main className={classes.appWrapperGrid}>
      <LandingZone />
      <section className={classes.bodyWrapperGrid}>
        <Profile />
        <SkillsBar />
        <ProjectStockman />
        <ProjectStockmanProto />
        <div>time line</div>
        <ProjectsGeneralAssembly />
      </section>
    </main>
  );
}

export default App;
