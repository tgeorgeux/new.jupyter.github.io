import React, { CSSProperties } from 'react';
import Body2Text from '../Body2Text';
import { Link } from 'react-router-dom';

export type CurrentPages =
  | 'home'
  | 'about'
  | 'technologies'
  | 'documentation'
  | 'community';

export interface NavbarProps {
  current: CurrentPages;
}

const bodyTextStyle = function(
  name: CurrentPages,
  props: NavbarProps
): CSSProperties {
  return {
    marginRight: '20px',
    marginLeft: '10px',
    color: props.current === name ? '#F37724' : '#4D4D4D',
    fontWeight: props.current === name ? 500 : 'inherit',
    lineHeight: props.current === name ? '18px' : 'inherit'
  };
};

const nonTextDecorated = {
  textDecoration: 'none',
  color: 'inherit'
};

export default function Navbar(props: NavbarProps): JSX.Element {
  return (
    <div style={{ height: '50px' }}>
      <div
        style={{
          display: 'flex',
          width: '960px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: '16px'
        }}
      >
        <img
          style={{
            marginTop: '-6px',
            width: '110px',
            marginRight: '300px'
          }}
          src="images/jupyterLogoRectangle.svg"
        ></img>
        <Body2Text style={bodyTextStyle('home', props)}>
          <Link style={nonTextDecorated} to="/">
            Home
          </Link>
        </Body2Text>
        <Body2Text style={bodyTextStyle('about', props)}>
          <Link style={nonTextDecorated} to="/about">
            About
          </Link>
        </Body2Text>
        <Body2Text style={bodyTextStyle('technologies', props)}>
          <Link style={nonTextDecorated} to="/technologies">
            Technologies
          </Link>
        </Body2Text>
        <Body2Text style={bodyTextStyle('documentation', props)}>
          <Link style={nonTextDecorated} to="/documentation">
            Documentation
          </Link>
        </Body2Text>
        <Body2Text style={bodyTextStyle('community', props)}>
          <Link style={nonTextDecorated} to="/community">
            Community
          </Link>
        </Body2Text>
      </div>
    </div>
  );
}
