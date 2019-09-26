// for polyfills
import "core-js/stable";
import "regenerator-runtime/runtime";

// code goes here
import React from "react";
import ReactDOM from "react-dom";

import H1Text from "./components/H1Text";
import H2Text from "./components/H2Text";
import H3Text from "./components/H3Text";
import H4Text from "./components/H4Text";
import H5Text from "./components/H5Text";
import H6Text from "./components/H6Text";

ReactDOM.render(
    <div>
    <H1Text>H1</H1Text>
    <H2Text>H2</H2Text>
    <H3Text>H3</H3Text>
    <H4Text>H4</H4Text>
    <H5Text>H5</H5Text>
    <H6Text>H6</H6Text>
    </div>,
    document.querySelector("#main")
);
