import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "movies-page" */),
);

const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "movies-page" */),
);

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...Please wait..</div>}>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/movies" component={MoviesPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
