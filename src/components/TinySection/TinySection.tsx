import React from 'react';
import H4Text from '../H4Text';
import Subtitle2Text from '../Subtitle2Text';
import { ImageTypes } from '../HeadlineSection';

export interface TinySectionProps {
  header: string;
  body: string | JSX.Element;
  icon?: ImageTypes;
  textAlign?: 'left' | 'right' | 'center';
  width?: string;
  children?: JSX.Element | JSX.Element[];
}

export default function TinySection(props: TinySectionProps): JSX.Element {
  return (
    <div
      style={{
        width: props.width || '328px',
        minHeight: '100px',
        display: 'inline-flex',
        textAlign: props.textAlign || 'left'
      }}
    >
      {props.icon && (
        <div style={{ minWidth: '48px' }}>
          <img
            style={{ maxHeight: '36px', marginTop: '6px' }}
            src={'images/' + props.icon + '.svg'}
          ></img>
        </div>
      )}
      <div>
        <H4Text style={{ color: '#4D4D4D', marginTop: '0' }}>
          {props.header}
        </H4Text>
        <Subtitle2Text style={{ color: '#616161' }}>{props.body}</Subtitle2Text>
        {props.children}
      </div>
    </div>
  );
}
