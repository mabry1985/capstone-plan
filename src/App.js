import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.js';
import MainMenu from './components/MainMenu.js';
import Model from './components/Model.js';
import PointOfSale from './components/PointOfSale.js';
import NewMenuItems from './components/NewMenuItems.js';


function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/main-menu' component={MainMenu} />
          <Route path='/model' component={Model} />
          <Route path='/menu' component={PointOfSale} />
          <Route path='/new' component={NewMenuItems} />
      </Switch>
    </div>
  );
}

export default App;
