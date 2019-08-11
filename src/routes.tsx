import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './views/home/Home';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Redirect to="/" />
  </Switch>
);
