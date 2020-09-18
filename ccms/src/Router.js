import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Coaching from './components/coaching/Coaching';
import Dashboard from './components/dashboard/Dashboard';

const Router = (props) => {

  const navigationType = props.path
  let history = useHistory();

  useEffect(() => {
    switch (navigationType) {
      case "Dashboard":
        history.replace('/dashboard')
        break;

      case "Coaching":
        history.push('/coaching')
        break;

      default:
        history.replace('/dashboard')
        break;
    }
  });

  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} exact />
      <Route path="/coaching" component={Coaching} exact />
    </Switch>
  )
}

export default Router;
