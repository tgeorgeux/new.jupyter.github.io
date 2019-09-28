import React, { ButtonHTMLAttributes } from "react";
import ButtonOutline from "../ButtonOutline";
import ButtonText from "../ButtonText";
import { ThemeProvider } from "styled-components";
import ButtonMode from './ButtonMode';

interface ButtonTheme {
  border?: string;
  background?: string;
  backgroundHover?: string;
  fontWeightHover?: number;
  unclickedColor?: string;
}

const getTheme = (mode: ButtonMode): ButtonTheme => {
  if (ButtonMode.Contained === mode) {
    return {
      background: '#F37724',
      backgroundHover: '#F37724',
      fontWeightHover: 600,
    };
  } else if (ButtonMode.Outline === mode) {
    return {
      unclickedColor: "#F37724",
    };
  } else {
    return {
      border: '0',
      unclickedColor: '#F37724',
    };
  }
}

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
