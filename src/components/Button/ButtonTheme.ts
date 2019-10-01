import { ButtonMode } from ".";

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

export {ButtonTheme, getTheme};
