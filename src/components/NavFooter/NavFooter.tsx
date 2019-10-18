import React, { HTMLAttributes, CSSProperties } from 'react';
import Body2Text from '../Body2Text';

function NavFooter(props: HTMLAttributes<HTMLDivElement>): JSX.Element {
  const footerStyle: CSSProperties = {
    width: '100%',
    height: '300px',
    background: '#0B5E9B',
    color: 'white'
  };

  const footerTextStyle: CSSProperties = {
    textAlign: 'center',
    paddingTop: '60px'
  };

  const footerIconStyle: CSSProperties = {
    maxHeight: '36px',
    display: 'inline-block'
  };

  const footerCenterIconStyle: CSSProperties = {
    ...footerIconStyle,
    paddingLeft: '80px',
    paddingRight: '80px'
  };

  const footerIconRowStyle: CSSProperties = {
    paddingTop: '54px',
    maxHeight: '36px',
    textAlign: 'center'
  };

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div style={footerStyle} {...props}>
      <div style={footerIconRowStyle}>
        <a href="http://homepages.cae.wisc.edu/~ece533/images/airplane.png">
          <img style={footerIconStyle} src="images/mail.svg"></img>
        </a>
        <a href="http://homepages.cae.wisc.edu/~ece533/images/airplane.png">
          <img style={footerCenterIconStyle} src="images/twitter.svg"></img>
        </a>
        <a href="http://homepages.cae.wisc.edu/~ece533/images/airplane.png">
          <img style={footerIconStyle} src="images/github.svg"></img>
        </a>
      </div>
      <div style={footerTextStyle}>
        <Body2Text>Copyright ©️ 2019 Project Jupyter</Body2Text>
        <Body2Text>Last updated {today}</Body2Text>
        <br />
        <Body2Text>
          The Jupyter Trademark is registered with the U.S. Patent &
        </Body2Text>
        <Body2Text>Trademark office.</Body2Text>
      </div>
    </div>
  );
}

export default NavFooter;
