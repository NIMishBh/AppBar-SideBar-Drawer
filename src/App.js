import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import AppNavigation from './components/AppNavigation';

const useStyles = makeStyles((theme) => ({

}));


function App() {

  const classes = useStyles();
  return (
    <div className="App">
      <AppNavigation />
    </div>
  );
}

export default App;
