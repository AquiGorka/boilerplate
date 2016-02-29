import React from 'react';
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './app.js';

const Home = () => {return (<div>Home</div>)};
const Section = () => {return (<div>Section</div>)};
const NotFound = () => {return (<div>404 Not Found</div>)};

//
const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="section" component={Section} />
		//
		<Route path="*" component={NotFound} />
	</Route>
);

//
document.addEventListener( 'DOMContentLoaded', () => render( <Router history={browserHistory} routes={routes} />, document.getElementById('root') ) );

