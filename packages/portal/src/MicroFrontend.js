import React from 'react';

export class MicroFrontend extends React.Component {
	componentDidMount() {
		const { name, host, document } = this.props;
		const scriptId = `micro-frontend-script-${name}`;

		if (document.getElementById(scriptId)) {
			this.renderMicroFrontend();
			return;
		}

		const script = document.createElement('script');
		script.id = scriptId;
		script.crossOrigin = '';
		script.src = `${host}/dist/main.js`;
		script.onload = this.renderMicroFrontend.bind(this);
		document.head.appendChild(script);
	}

	componentWillUnmount() {
		const { name, window } = this.props;

		window[`unmount${name}`](`${name}-container`);
	}

	renderMicroFrontend() {
		const { name, window, history } = this.props;

		window[`render${name}`](`${name}-container`, history);
	}

	render() {
		return <div id={`${this.props.name}-container`} />;
	}
}

MicroFrontend.defaultProps = {
	document,
	window,
};
