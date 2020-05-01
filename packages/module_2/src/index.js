import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

window.renderModule2 = (containerId, history) => {
	ReactDOM.render(
		<App history={history} />,
		document.getElementById(containerId)
	);
};

window.unmountModule2 = containerId => {
	ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
