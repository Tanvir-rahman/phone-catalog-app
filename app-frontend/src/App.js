import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from '@pages/homepage/homepage.component';
import DetailsPage from '@pages/detailspage/detailspage.component';
import NotFound from '@pages/notfound/notfound.component';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/phones" component={HomePage} />
      <Route path="/phones/:phoneId" component={DetailsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
