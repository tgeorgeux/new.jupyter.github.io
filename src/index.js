// for polyfills
import "core-js/stable";
import "regenerator-runtime/runtime";

// code goes here
import React from "react";
import ReactDOM from "react-dom";

import Button from "./components/Button";

var clickFn = () => console.log('hi');
ReactDOM.render(<Button onClick={clickFn}>Jovian</Button>, document.querySelector("#main"));
