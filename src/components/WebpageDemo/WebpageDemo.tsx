import Navbar from '../Navbar';
import ContentBlock from '../ContentBlock';
import HeadlineSection, { ImageTypes } from '../HeadlineSection';
import FlexRow from '../FlexRow';
import TinySection from '../TinySection';
import LineBreak from '../LineBreak';
import Button, { ButtonMode, ButtonText } from '../Button';
import NavFooter from '../NavFooter';
import Body1Text from '../Body1Text';
import H1Text from '../H1Text';
import H2Text from '../H2Text';
import H3Text from '../H3Text';
import H4Text from '../H4Text';
import H5Text from '../H5Text';
import H6Text from '../H6Text';
import Subtitle1Text from '../Subtitle1Text';
import Subtitle2Text from '../Subtitle2Text';
import Body2Text from '../Body2Text';
import CaptionText from '../CaptionText';
import OverlineText from '../OverlineText';
import React from 'react';

function WebpageDemo(): JSX.Element {
  return (
    <div>
      <Navbar current="home" />
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
      <NavFooter />
    </div>
  );
}
export default WebpageDemo;
