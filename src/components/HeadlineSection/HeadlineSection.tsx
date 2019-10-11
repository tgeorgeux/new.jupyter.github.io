import React, { CSSProperties } from 'react';
import H2Text from '../H2Text';
import Body1Text from '../Body1Text';
import ImageTypes from './ImageTypes';

export interface TinySectionProps {
  header: string;
  body?: string;
  image?: ImageTypes;
  imageStyle?: CSSProperties;
  imageLocation?: 'left' | 'right';
  children?: JSX.Element | JSX.Element[];
}

export default function HeadlineSection(props: TinySectionProps): JSX.Element {
  return (
    <div style={{ display: 'flex' }}>
      {props.image && (
        <img
          style={{
            ...props.imageStyle,
            order: props.imageLocation === 'left' ? 0 : 2
          }}
          src={'images/' + props.image + '.svg'}
        ></img>
      )}
      <div>
        <H2Text
          style={{
            color: '#4D4D4D',
            marginTop: '0',
            marginBottom: '32px'
          }}
        >
          {props.header}
        </H2Text>
        <div style={{ width: '450px', color: '#616161' }}>
          {props.body && <Body1Text>{props.body}</Body1Text>}
          {props.children}
        </div>
      </div>
    </div>
  );
}
