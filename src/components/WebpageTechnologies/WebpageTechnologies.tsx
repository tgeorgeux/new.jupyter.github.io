import React from 'react';
import Navbar from '../Navbar';
import NavHeader from '../NavHeader';
import ContentBlock from '../ContentBlock';
import HeadlineSection, { ImageTypes } from '../HeadlineSection';
import LineBreak from '../LineBreak';
import Button, { ButtonMode } from '../Button';
import NavFooter from '../NavFooter';
import Body1Text from '../Body1Text';
import H4Text from '../H4Text';
import H5Text from '../H5Text';
import TinySection from '../TinySection';
import FlexRow from '../FlexRow';

function WebpageTechnologies(): JSX.Element {
  return (
    <div>
      <Navbar current="technologies" />
      <NavHeader
        headline="technologies"
        subheadline="Create and share with the world"
        body="Our technologies are free and open source, and support interactive computing across all programming languages."
      />
      <ContentBlock>
        <HeadlineSection
          header="Popular tools"
          image={ImageTypes.jupyterLab1}
          imageStyle={{
            marginLeft: '58px',
            width: '380px'
          }}
        >
          <H4Text>Jupyter Notebook</H4Text>
          <H5Text>A single environment for interactive computing</H5Text>
          <Body1Text>
            Jupyter Notebooks allow you to run individual code blocks. All in
            the programming language of your choice.
          </Body1Text>
          <Body1Text>
            Annotate your findings with text and visuals and enable others to
            build off of your work.
          </Body1Text>
          <Button
            style={{ marginTop: '16px' }}
            onClick={console.log}
            mode={ButtonMode.Contained}
          >
            Learn More
          </Button>
        </HeadlineSection>
      </ContentBlock>
      <ContentBlock>
        <HeadlineSection
          image={ImageTypes.jupyterLab2}
          imageLocation="left"
          imageStyle={{
            marginTop: '-70px',
            width: '380px',
            marginRight: '70px'
          }}
        >
          <H4Text>Jupyter Lab</H4Text>
          <H5Text>The new interface for Jupyter Notebooks</H5Text>
          <Body1Text>
            Use text editors, terminals, and data file viewers side by side with
            notebooks in a tabbed work area.
          </Body1Text>
          <Body1Text>
            Configure and arrange the interface to support a wide range of
            workflows. Great for data science, scientific computing, and machine
            learning.
          </Body1Text>
          <Button
            style={{ marginTop: '16px' }}
            onClick={console.log}
            mode={ButtonMode.Contained}
          >
            Learn More
          </Button>
        </HeadlineSection>
      </ContentBlock>
      <ContentBlock>
        <HeadlineSection
          image={ImageTypes.jupyterHub}
          imageLocation="right"
          imageStyle={{ height: '400px', marginTop: '-20px' }}
        >
          <H4Text>Jupyter Hub</H4Text>
          <H5Text>Jupyter workspace on shared resources</H5Text>
          <Body1Text>
            Allow users to access notebooks and run code, all at the same time
            and using the same resources.
          </Body1Text>
          <Body1Text>
            Deploy to a large number of users and manage authentication. Ideal
            for companies, classrooms, and research labs.
          </Body1Text>
          <Button
            style={{ marginTop: '16px' }}
            onClick={console.log}
            mode={ButtonMode.Contained}
          >
            Learn More
          </Button>
        </HeadlineSection>
      </ContentBlock>
      <LineBreak />
      <ContentBlock>
        <HeadlineSection
          image={ImageTypes.moon1}
          imageLocation="left"
          header="Our technology"
          body="The three main layers of our technology are kernels,
          servers, and frontends. Each layer is interchangeable."
        />
        <FlexRow style={{ marginLeft: '60px', marginTop: '16px' }}>
          <TinySection
            header="Kernels"
            body="The core of Jupyter technology. Kernels can exist for any programming language, such as Python and R."
          />
          <TinySection
            header="Servers"
            body="The middleware that connects kernels to frontend applications.
            Servers can be local or run in the cloud."
            textAlign="right"
          />
        </FlexRow>
        <img
          style={{
            height: '600px',
            display: 'block',
            margin: '-140px auto -130px auto'
          }}
          src={'images/theTechnology.svg'}
        ></img>
        <FlexRow style={{ marginLeft: '60px' }}>
          <TinySection
            header="Frontends"
            body="The applications used for interactive computing. Popular
            frontends include JupyterLab and the Jupyter Notebook."
          />
          <TinySection
            header="Standards"
            body="A set of open standards that anyone can leverage.
            Build your own technology based on the Jupyter framework."
            textAlign="right"
          />
        </FlexRow>
      </ContentBlock>
      <NavFooter />
    </div>
  );
}

export default WebpageTechnologies;
