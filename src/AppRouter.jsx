import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  Login,
  Preferencias,
  Home,
  Buscador,
  Perfil,
  NotFoundPage,
} from './pages';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/preferencias" component={Preferencias} />
        <Route path="/home" component={Home} />
        <Route path="/buscador" component={Buscador} />
        <Route path="/perfil" component={Perfil} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
