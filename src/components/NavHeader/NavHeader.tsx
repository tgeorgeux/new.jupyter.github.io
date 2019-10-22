import React, { HTMLAttributes, CSSProperties } from 'react';
import H1Text from '../H1Text';
import Body1Text from '../Body1Text';
import Subtitle1Text from '../Subtitle1Text';

export interface NavHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: JSX.Element | JSX.Element[];
  headline: string | JSX.Element;
  subheadline?: string;
  body: string;
}

function NavHeader(props: NavHeaderProps): JSX.Element {
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
    color: '#f37726'
  };

  const headerFlexStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  };

  return (
    <div style={headerStyle} {...props}>
      <div style={headerFlexStyle}>
        <H1Text style={h1Style}>{props.headline}</H1Text>
      </div>
      {props.subheadline && (
        <Subtitle1Text style={{ marginTop: '-16px' }}>
          {props.subheadline}
        </Subtitle1Text>
      )}
      <div style={headerFlexStyle}>
        <Body1Text style={{ width: '480px' }}>{props.body}</Body1Text>
      </div>
      <div style={{ ...headerFlexStyle, marginTop: '16px' }}>
        {props.children}
      </div>
    </div>
  );
}

export default NavHeader;
