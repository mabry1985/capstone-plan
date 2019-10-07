import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.js';
import MainMenu from './components/MainMenu.js';
import Model from './components/Model.js';
import PointOfSale from './components/PointOfSale.js';
import NewMenuItems from './components/NewMenuItems.js';
import EditBeer from './components/EditBeer'
import EditFood from './components/EditFood'

function App(props) {
  const { profile } = props
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/main-menu' component={MainMenu} />
          <Route path='/model' component={Model} />
          <Route path='/menu' component={PointOfSale} />
          <Route path='/new' component={NewMenuItems} />
          <Route path='/edit-beer/:id' component={EditBeer} />
          <Route path='/edit-food/:id' component={EditFood} />
      </Switch>
    </div>
  );
}

export default App;
