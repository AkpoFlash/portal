import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const defaultHistory = createBrowserHistory();

export class App extends React.Component {
	render() {
		return (
			<Router history={this.props.history || defaultHistory}>
				<div>Module 1</div>
			</Router>
		);
	}
}
