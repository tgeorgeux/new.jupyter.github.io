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
import FlexRow from './components/FlexRow';
import LineBreak from './components/LineBreak';
import ContentBlock from './components/ContentBlock';

// code
ReactDOM.render(
  <div>
    <ContentBlock>
      <HeadlineSection
        header="Free, open source tools"
        body="Jupyter technology is the standard for workflows in data science, machine learning, and more."
      />
      <FlexRow style={{ marginLeft: '60px', marginTop: '16px' }}>
        <TinySection
          header="Data science"
          body="Run individual code blocks so you can test as you go and see results immediately."
        />
        <TinySection
          header="Scientific computing"
          body="Explain your thought process step-by-step and tell a story with visualizations."
          textAlign="right"
        />
      </FlexRow>
      <FlexRow style={{ marginLeft: '60px', marginTop: '120px' }}>
        <TinySection
          header="Machine Learning"
          body="Build a scalable, reproducible, and extensible machine learning infrastructure."
        />
        <TinySection
          header="Data analytics"
          body="Produce rich, interactive output, including HTML, images, and videos."
          textAlign="right"
        />
      </FlexRow>
    </ContentBlock>
    <LineBreak />
    <ContentBlock>
      <HeadlineSection
        image={ImageTypes.history2}
        imageStyle={{
          marginTop: '-75px',
          marginBottom: '-50px',
          width: '400px'
        }}
        header="Why use Jupyter?"
        body="Our tools can support interactive computing and data analysis across any programming language."
        imageLocation="left"
      />
      <FlexRow style={{ marginBottom: '80px' }}>
        <TinySection
          icon="industry"
          header="Industry"
          body="Powering entire platforms at Google, IBM, and Microsoft."
        />
        <TinySection
          icon="research"
          header="Research"
          body="Assisting in Nobel Prize-winning discoveries."
        />
      </FlexRow>
      <FlexRow>
        <TinySection
          icon="academia"
          header="Academia"
          body="Teaching students at Harvard, Columbia, and MIT."
        />
        <TinySection
          icon="journalism"
          header="Journalism"
          body={
            <span>
              Leading data-driven reporting at <i>The New York Times</i>.
            </span>
          }
        />
      </FlexRow>
    </ContentBlock>
    <LineBreak />
    <ContentBlock>
      <HeadlineSection
        image={ImageTypes.worldwideCommunity}
        imageStyle={{
          marginTop: '-125px',
          marginBottom: '-50px',
          width: '500px'
        }}
        header="Worldwide community"
        body="Contributors from around the world work together to improve Project Jupyter. Both for themselves and others."
        imageLocation="right"
      />
      <FlexRow>
        <TinySection
          width="300px"
          header="Improve our tools"
          textAlign="center"
          body="Join the millions of others who are taking Project Jupyter to the next level."
        >
          <Button onClick={console.log} mode={ButtonMode.Contained}>
            Get Involved
          </Button>
        </TinySection>
        <TinySection
          width="300px"
          header="Attend an event"
          textAlign="center"
          body="Meet with members of the community at one of our upcoming events."
        >
          <Button onClick={console.log} mode={ButtonMode.Contained}>
            Learn more
          </Button>
        </TinySection>
      </FlexRow>
    </ContentBlock>
    <LineBreak />
    <ContentBlock>
      <HeadlineSection
        image={ImageTypes.visionForTheFuture}
        imageStyle={{
          marginTop: '-125px',
          marginBottom: '-50px',
          width: '500px'
        }}
        header="Vision for the future"
        body="We develop open standards in the hopes of building a better future. A future where all science is open and transparent."
        imageLocation="left"
      />
      <FlexRow>
        <TinySection
          width="300px"
          header="Support us"
          textAlign="center"
          body="Make a donation and help us achieve our goal of open science for all."
        >
          <Button onClick={console.log} mode={ButtonMode.Contained}>
            Get Involved
          </Button>
        </TinySection>
        <TinySection
          width="300px"
          header="Our history"
          textAlign="center"
          body="What started out as a single effort has exploded into a revolution."
        >
          <Button onClick={console.log} mode={ButtonMode.Contained}>
            Learn more
          </Button>
        </TinySection>
      </FlexRow>
    </ContentBlock>
    <NavFooter />
    <HeadlineSection
      image={ImageTypes.leadership}
      imageLocation="right"
      imageStyle={{ height: '350px' }}
      header="Leadership"
      body=""
    >
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
    <TinySection
      textAlign="right"
      header="Scientific computing"
      body="Explain your thought process step-by-step and tell a story with visualizations."
    />
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <TinySection
        header="Data Science"
        body="Run individual code blocks so you can test as you go and see results immediately."
      />
    </div>
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
