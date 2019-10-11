import React, { HTMLAttributes, CSSProperties } from 'react';
import Body2Text from '../Body2Text';

function NavFooter(props: HTMLAttributes<HTMLDivElement>) {
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

  return (
    <div style={footerStyle} {...props}>
      <div style={footerIconRowStyle}>
        <a href="http://homepages.cae.wisc.edu/~ece533/images/airplane.png">
          <img
            style={footerIconStyle}
            src="http://homepages.cae.wisc.edu/~ece533/images/airplane.png"
          ></img>
        </a>
        <a href="http://homepages.cae.wisc.edu/~ece533/images/airplane.png">
          <img
            style={footerCenterIconStyle}
            src="http://homepages.cae.wisc.edu/~ece533/images/airplane.png"
          ></img>
        </a>
        <a href="http://homepages.cae.wisc.edu/~ece533/images/airplane.png">
          <img
            style={footerIconStyle}
            src="http://homepages.cae.wisc.edu/~ece533/images/airplane.png"
          ></img>
        </a>
      </div>
      <div style={footerTextStyle}>
        <Body2Text>Copyright ©️ 2019 Project Jupyter</Body2Text>
        <Body2Text>Last updated Fri, Oct 4, 2019</Body2Text>
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
