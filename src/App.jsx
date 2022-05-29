import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Navigation} />
    </Switch>
  );
};

export default App;
