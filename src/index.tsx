// for polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// imports
import React from 'react';
import ReactDOM from 'react-dom';

import H1Text from './components/H1Text';
import H2Text from './components/H2Text';
import H3Text from './components/H3Text';
import H4Text from './components/H4Text';
import H5Text from './components/H5Text';
import H6Text from './components/H6Text';
import Subtitle1Text from './components/Subtitle1Text';
import Subtitle2Text from './components/Subtitle2Text';
import Body1Text from './components/Body1Text';
import Body2Text from './components/Body2Text';
import CaptionText from './components/CaptionText';
import OverlineText from './components/OverlineText';
import { Button, ButtonMode, ButtonText } from './components/Button';
import NavFooter from './components/NavFooter';

// code
ReactDOM.render(
  <div>
    <NavFooter />
    <Button onClick={console.log} mode={ButtonMode.Contained}>
      Button Label
    </Button>
    <hr />
    <Button onClick={console.log} mode={ButtonMode.Outline}>
      Button Label
    </Button>
    <hr />
    <Button onClick={console.log} mode={ButtonMode.Text}>
      Button Label
    </Button>
    <hr />
    <H1Text>H1</H1Text>
    <H2Text>H2</H2Text>
    <H3Text>H3</H3Text>
    <H4Text>H4</H4Text>
    <H5Text>H5</H5Text>
    <H6Text>H6</H6Text>
    <Subtitle1Text>Subtitle 1</Subtitle1Text>
    <Subtitle2Text>Subtitle 2</Subtitle2Text>
    <Body1Text>Body 1</Body1Text>
    <Body2Text>Body 2</Body2Text>
    <ButtonText>Button</ButtonText>
    <CaptionText>Caption</CaptionText>
    <OverlineText>Overline</OverlineText>
  </div>,
  document.querySelector('#main')
);
