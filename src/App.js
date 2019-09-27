import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.js'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
