import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './app.js'
import Home from './sections/home/index.js'

const Section = () => { return (<div>Section</div>) }
const NotFound = () => { return (<div>404 Not Found</div>) }

//
const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='section' component={Section} />
      //
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
)

document.addEventListener('DOMContentLoaded', () =>
  render(router, document.getElementById('root')))
