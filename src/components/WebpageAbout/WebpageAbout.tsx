import Navbar from '../Navbar';
import ContentBlock from '../ContentBlock';
import HeadlineSection, { ImageTypes } from '../HeadlineSection';
import LineBreak from '../LineBreak';
import Button, { ButtonMode } from '../Button';
import NavFooter from '../NavFooter';
import React from 'react';
import Body1Text from '../Body1Text';
import NavHeader from '../NavHeader';

function WebpageAbout(): JSX.Element {
  return (
    <div>
      <Navbar current="about" />
      <NavHeader />
      <ContentBlock>
        <HeadlineSection
          header="Our history"
          image={ImageTypes.history1}
          imageStyle={{
            marginLeft: '58px',
            width: '380px'
          }}
        >
          <Body1Text>
            In 2001, Fernando Perez set out to create a notebook interface for
            Python. He liked Python because it was an open source programming
            language.
          </Body1Text>
          <Body1Text>
            “My family and friends in Colombia didn’t have access to the tools I
            was using. I wanted to be able to share my work with them.”
          </Body1Text>
          <Body1Text>
            After almost a decade of work, Perez met Brian Granger. Together
            they built the first IPython Notebook.
          </Body1Text>
          <Body1Text>
            Popularity of the notebook exploded. People began using it with
            programming languages other than Python. Seeing this shift, Perez
            and Granger decided to start Project Jupyter.
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
          header="‘Jupyter’ name"
          image={ImageTypes.freeOpenSourceTools}
          imageLocation="left"
          imageStyle={{
            marginTop: '-70px',
            width: '380px',
            marginRight: '70px'
          }}
        >
          <Body1Text>
            The name Jupyter is a reference to the project’s initial core
            programming languages: Julia, Python, and R.
          </Body1Text>
          <Body1Text>
            It is also an homage to Galileo, who recorded his discovery of
            Jupiter’s moons in a notebook.
          </Body1Text>
        </HeadlineSection>
      </ContentBlock>
      <LineBreak />
      <ContentBlock>
        <HeadlineSection
          image={ImageTypes.leadership}
          imageLocation="right"
          imageStyle={{ height: '400px', marginTop: '-20px' }}
          header="Leadership"
        >
          <Body1Text>
            Today, Perez serves as the organization’s leader. Granger oversees
            all the operations and logistics.
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
      </ContentBlock>
      <LineBreak />
      <ContentBlock>
        <HeadlineSection
          image={ImageTypes.partnerships}
          imageStyle={{
            marginTop: '-75px',
            marginBottom: '-50px',
            width: '400px'
          }}
          header="Donate"
          imageLocation="left"
        >
          <Body1Text>
            Have you found Project Jupyter to be useful in your work, research,
            or company? Please consider making a donation.
          </Body1Text>
          <Body1Text>
            Your contributions will help fund the development of our software,
            documentation, and community.
          </Body1Text>
          <Body1Text>
            The NumFOCUS Foundation manages all donations, which are
            tax-deductible in the United States. NumFOCUS is a 501(c)3
            non-profit foundation.
          </Body1Text>
          <Button
            style={{ marginTop: '16px' }}
            onClick={console.log}
            mode={ButtonMode.Contained}
          >
            Donate
          </Button>
        </HeadlineSection>
      </ContentBlock>
      <LineBreak />
      <ContentBlock>
        <HeadlineSection header="Partners" />
        <Body1Text style={{ color: '#616161' }}>
          We are grateful for the resources and direct funding from our
          institutional partners. Our efforts would not be where they are today
          without their support.
        </Body1Text>
      </ContentBlock>
      <NavFooter />
    </div>
  );
}
export default WebpageAbout;
