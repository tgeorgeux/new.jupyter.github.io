import React, { HTMLAttributes, CSSProperties } from 'react';
import H1Text from '../H1Text';
import Body1Text from '../Body1Text';
import Button, { ButtonMode } from '../Button';

function NavHeader(props: HTMLAttributes<HTMLDivElement>): JSX.Element {
  const headerStyle: CSSProperties = {
    width: '100%',
    height: '340px',
    background: '#093656',
    color: 'white',
    textAlign: 'center',
    marginBottom: '-40px'
  };

  const h1Style: CSSProperties = {
    marginTop: '40px',
    marginBottom: '32px'
  };

  const headerFlexStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  };

  const buttonStyle: CSSProperties = {
    marginTop: '16px',
    color: '#093656'
  };

  return (
    <div style={headerStyle} {...props}>
      <div style={headerFlexStyle}>
        <H1Text style={h1Style}>
          compute <span style={{ color: '#f37726' }}>together</span>
        </H1Text>
      </div>
      <div style={headerFlexStyle}>
        <Body1Text style={{ width: '480px' }}>
          Project Jupyter offers hundreds of open source computing tools. Built
          by and for a worldwide community.
        </Body1Text>
      </div>
      <Button style={buttonStyle} mode={ButtonMode.Text}>
        FIND A TOOL
      </Button>
    </div>
  );
}

export default NavHeader;
