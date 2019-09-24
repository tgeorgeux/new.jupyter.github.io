import React, { ButtonHTMLAttributes } from "react";

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props}>
      Hello {props.children}!
    </button>
  );
}

export default Button;
