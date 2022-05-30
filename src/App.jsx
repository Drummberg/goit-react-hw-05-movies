import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-view" */),
);

const MoviesPage = lazy(() =>
  import('./views/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */),
);

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...Please wait..</div>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies" exact component={MoviesPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
