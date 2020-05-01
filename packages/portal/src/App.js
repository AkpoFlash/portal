import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MicroFrontend } from './MicroFrontend';
import { Nav } from './Nav/Nav';

const { REACT_APP_MODULE_1_HOST, REACT_APP_MODULE_2_HOST } = process.env;

const Module1 = ({ history }) => (
	<MicroFrontend
		history={history}
		host={REACT_APP_MODULE_1_HOST}
		name='Module1'
	/>
);
const Module2 = ({ history }) => (
	<MicroFrontend
		history={history}
		host={REACT_APP_MODULE_2_HOST}
		name='Module2'
	/>
);

export const App = () => (
	<BrowserRouter>
		<Nav />
		<Switch>
			<Route exact path='/' component={() => <div>Portal</div>} />
			<Route exact path='/module1' component={Module1} />
			<Route exact path='/module2' render={Module2} />
		</Switch>
	</BrowserRouter>
);
