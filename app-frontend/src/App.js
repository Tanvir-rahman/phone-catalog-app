import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Spinner from '@components/spinner/spinner.component';

const HomePage = lazy(() => import('@pages/homepage/homepage.component'));
const DetailsPage = lazy(() => import('@pages/detailspage/detailspage.component'));
const NotFound = lazy(() => import('@pages/notfound/notfound.component'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/phones" component={HomePage} />
        <Route path="/phones/:phoneId" component={DetailsPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default App;
