// for polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import WebpageHome from './components/WebpageHome';
import WebpageDemo from './components/WebpageDemo';

// code
const routing = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={WebpageHome} />
      <Route exact path="/demo" component={WebpageDemo} />
      <Route exact path="/contact" component={WebpageHome} />
    </div>
  </BrowserRouter>
);
ReactDOM.render(routing, document.getElementById('main'));
// ReactDOM.render(<WebpageHome />, document.querySelector('#main'));
