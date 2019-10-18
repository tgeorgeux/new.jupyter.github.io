import React, { HTMLAttributes, CSSProperties } from 'react';
import H1Text from '../H1Text';
import Body1Text from '../Body1Text';
import Button, { ButtonMode } from '../Button';

function NavHeader(props: HTMLAttributes<HTMLDivElement>): JSX.Element {
  const headerStyle: CSSProperties = {
    width: '100%',
    height: '310px',
    background: '#093656',
    color: 'white'
  };

  const headerTextStyle: CSSProperties = {
    textAlign: 'center'
  };

  const h1Style: CSSProperties = {
    paddingTop: '16px',
    marginTop: '0px',
    marginBottom: '20px',
    paddingRight: '20px'
  };

  const h1ColorStyle: CSSProperties = {
    paddingTop: '16px',
    marginTop: '0px',
    marginBottom: '20px',
    color: '#f37726'
  };

  const headerFlexStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  };

  const bodyTextStyle: CSSProperties = {
    marginBottom: '2px'
  };

  const buttonStyle: CSSProperties = {
    marginTop: '16px',
    color: '#093656'
  };

  return (
    <div style={headerStyle} {...props}>
      <div style={headerTextStyle}>
        <div style={headerFlexStyle}>
          <H1Text style={h1Style}>compute </H1Text>
          <H1Text style={h1ColorStyle}> together</H1Text>
        </div>
        <Body1Text style={bodyTextStyle}>
          Project Jupyter offers hundreds of open source computing tools.
        </Body1Text>
        <Body1Text>Built by and for a worldwide community.</Body1Text>
        <Button style={buttonStyle} mode={ButtonMode.Text}>
          FIND A TOOL
        </Button>
      </div>
    </div>
  );
}

export default NavHeader;
