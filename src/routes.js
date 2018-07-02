import React from 'react';
import { Switch, Route } from 'react-router';
import Dashboard from './Components/Dashboard';
import NotFound from './Components/Common/NotFound';

const Routes = () => (
	<Switch>
		  <Route path='/' exact component={Dashboard} />
		  <Route path='*' exact component={NotFound} />
	</Switch>
)

export default Routes;