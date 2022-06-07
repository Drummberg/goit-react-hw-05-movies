import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage' /* webpackChunkName: "home-view" */),
);

const MoviesPage = lazy(() =>
  import('./views/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

const NotFoundView = lazy(() =>
  import(
    './views/NotFoundView/NotFoundView' /* webpackChunkName: "not-found-page" */
  ),
);

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...Please wait..</div>}>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="/movies" exact element={<MoviesPage />} />
          <Route path={'*'} element={NotFoundView} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
