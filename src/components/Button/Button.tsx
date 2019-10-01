import React, { ButtonHTMLAttributes } from "react";
import ButtonOutline from "./ButtonOutline";
import ButtonText from "./ButtonText";
import { ThemeProvider } from "styled-components";
import ButtonMode from './ButtonMode';
import { getTheme } from "./ButtonTheme";

function Button(props: ButtonHTMLAttributes<HTMLButtonElement> & {mode: ButtonMode}) {
  return (
    <ThemeProvider theme={getTheme(props.mode)}>
      <ButtonOutline {...props}>
          <ButtonText>
            {props.children}
          </ButtonText>
      </ButtonOutline>
    </ThemeProvider>
  );
}

export default Button;
