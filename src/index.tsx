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
import Button, { ButtonMode, ButtonText } from './components/Button';
import NavFooter from './components/NavFooter';
import TinySection from './components/TinySection';
import HeadlineSection, { ImageTypes } from './components/HeadlineSection';

// code
ReactDOM.render(
  <div>
    <HeadlineSection header="Leadership" body="">
      <Body1Text>
        Today, Perez serves as the organization’s leader. Granger oversees all
        the operations and logistics.
      </Body1Text>
      <Body1Text>
        A team of core contributors makes up the Steering Council. They help
        ensure the long-term success of the project.
      </Body1Text>
      <Button
        style={{ marginTop: '16px' }}
        onClick={console.log}
        mode={ButtonMode.Contained}
      >
        Learn More
      </Button>
    </HeadlineSection>
    <HeadlineSection
      image={ImageTypes.history1}
      header="Why use Jupyter?"
      body="Our tools can support interactive computing and data analysis across any programming language."
    />
    <TinySection
      icon="academia"
      header="Academia"
      body="Teaching students at Harvard, Columbia, and MIT."
    />
    <TinySection
      textAlign="right"
      header="Scientific computing"
      body="Explain your thought process step-by-step and tell a story with visualizations."
    />
    <TinySection
      header="Data Science"
      body="Run individual code blocks so you can test as you go and see results immediately."
    />
    <TinySection
      width="300px"
      header="Support us"
      textAlign="center"
      body="Make a donation and help us achieve our goal of open science for all."
    >
      <Button onClick={console.log} mode={ButtonMode.Contained}>
        Outline
      </Button>
    </TinySection>
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
