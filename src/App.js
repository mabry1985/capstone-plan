import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.js';
import LogIn from './components/LogIn.js';
import SignUp from './components/SignUp.js';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/log-in' component={LogIn} />
          <Route exact path='/sign-up' component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
