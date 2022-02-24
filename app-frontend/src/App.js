import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

const HomePage = lazy(() => import('@pages/homepage/homepage.component'));
const DetailsPage = lazy(() => import('@pages/detailspage/detailspage.component'));
const NotFound = lazy(() => import('@pages/notfound/notfound.component'));

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
