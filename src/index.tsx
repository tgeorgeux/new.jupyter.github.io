// for polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// imports
import React from 'react';
import ReactDOM from 'react-dom';

import WebpageHome from './components/WebpageHome';

// code
ReactDOM.render(<WebpageHome />, document.querySelector('#main'));
