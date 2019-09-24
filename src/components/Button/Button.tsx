import React from "react";

function Button(props) {
  return (
    <button {...props}>
      Hello {props.children}!
    </button>
  );
}

export default Button;
