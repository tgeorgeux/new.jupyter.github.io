// for polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import WebpageHome from './components/WebpageHome';
import WebpageDemo from './components/WebpageDemo';
import WebpageAbout from './components/WebpageAbout';
import WebpageTechnologies from './components/WebpageTechnologies';

// code
const routing = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={WebpageHome} />
      <Route exact path="/about" component={WebpageAbout} />
      <Route exact path="/technologies" component={WebpageTechnologies} />
      <Route exact path="/documentation" component={WebpageHome} />
      <Route exact path="/community" component={WebpageHome} />
      <Route exact path="/demo" component={WebpageDemo} />
    </div>
  </BrowserRouter>
);
ReactDOM.render(routing, document.getElementById('main'));
// ReactDOM.render(<WebpageHome />, document.querySelector('#main'));
