import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Coaching from './components/coaching/Coaching';
import PlanStageOne from './components/coaching/newPlan/PlanStageOne';
import PlanStageTwo from './components/coaching/newPlan/PlanStageTwo';
import PlanStageThree from './components/coaching/newPlan/PlanStageThree';
import PlanStageFour from './components/coaching/newPlan/PlanStageFour';
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
      <Route path="/stageone" component={PlanStageOne} exact />
      <Route path="/stagetwo" component={PlanStageTwo} exact />
      <Route path="/stagethree" component={PlanStageThree} exact />
      <Route path="/stagefour" component={PlanStageFour} exact />
    </Switch>
  )
}

export default Router;
