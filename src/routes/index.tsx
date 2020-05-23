import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';
import Login from '../pages/Login';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;
