import React, { CSSProperties } from 'react';
import Body2Text from '../Body2Text';

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
          justifyContent: 'flex-end',
          width: '960px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: '16px'
        }}
      >
        <a href="http://homepages.cae.wisc.edu/~ece533/images/airplane.png">
          <img
            style={{
              height: '30px',
              marginTop: '-6px',
              width: '100px',
              marginRight: '300px'
            }}
            src="http://homepages.cae.wisc.edu/~ece533/images/airplane.png"
          ></img>
        </a>
        <Body2Text style={bodyTextStyle('home', props)}>
          <a href="#" style={nonTextDecorated}>
            Home
          </a>
        </Body2Text>
        <Body2Text style={bodyTextStyle('about', props)}>
          <a href="#" style={nonTextDecorated}>
            About
          </a>
        </Body2Text>
        <Body2Text style={bodyTextStyle('technologies', props)}>
          <a href="#" style={nonTextDecorated}>
            Technologies
          </a>
        </Body2Text>
        <Body2Text style={bodyTextStyle('documentation', props)}>
          <a href="#" style={nonTextDecorated}>
            Documentation
          </a>
        </Body2Text>
        <Body2Text style={bodyTextStyle('community', props)}>
          <a href="#" style={nonTextDecorated}>
            Community
          </a>
        </Body2Text>
      </div>
    </div>
  );
}
