import Navbar from '../Navbar';
import ContentBlock from '../ContentBlock';
import HeadlineSection, { ImageTypes } from '../HeadlineSection';
import FlexRow from '../FlexRow';
import TinySection from '../TinySection';
import LineBreak from '../LineBreak';
import Button, { ButtonMode } from '../Button';
import NavFooter from '../NavFooter';
import React from 'react';
import NavHeader from '../NavHeader';

function WebpageHome(): JSX.Element {
  return (
    <div>
      <Navbar current="home" />
      <NavHeader
        body="Project Jupyter offers hundreds of open source computing tools. Built
      by and for a worldwide community."
        headline={
          <span>
            <span style={{ color: 'white' }}>compute</span> together
          </span>
        }
      >
        <Button style={{ color: '#093656' }} mode={ButtonMode.Text}>
          Find a tool
        </Button>
      </NavHeader>
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
        <img
          style={{
            height: '540px',
            display: 'block',
            paddingRight: '50px',
            margin: '-170px auto -260px auto'
          }}
          src={'images/planetwithmoons.svg'}
        ></img>
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
            icon={ImageTypes.iconIndustry}
            header="Industry"
            body="Powering entire platforms at Google, IBM, and Microsoft."
          />
          <TinySection
            icon={ImageTypes.iconResearch}
            header="Research"
            body="Assisting in Nobel Prize-winning discoveries."
          />
        </FlexRow>
        <FlexRow>
          <TinySection
            icon={ImageTypes.iconAcademia}
            header="Academia"
            body="Teaching students at Harvard, Columbia, and MIT."
          />
          <TinySection
            icon={ImageTypes.iconJournalism}
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
    </div>
  );
}
export default WebpageHome;
