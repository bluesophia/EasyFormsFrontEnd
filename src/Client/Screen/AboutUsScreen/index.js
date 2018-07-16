import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';
import HeaderLine from '../../Components/Common/HeaderLine';
import Text from '../../Components/Common/Text';
import BigTitle from '../../Components/Common/Title/BigTitle.js';

const Title = css`
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.h2};
    font-weight:${Themes.fontWeight.black};
    text-align:center;
    line-height:30px;
    text-transform:uppercase;
    letter-spacing:5px;
`
const LightGreyBg = css`
  background-color:rgba(238,238,238,0.6);
`
const BlueBg = css`
  background:linear-gradient(${Themes.colors.blue},${Themes.colors.blueLight});
`
const AboutUsScreen = () => (
    <ThemeProvider theme={Themes}>   
      <div>
          <Section01>
              <Section01__TitleDiv>
                  <Section01__Title>Global clients around Us</Section01__Title>
                  <HeaderLine />
                  <Section01__Text>Over 4 years, EasyForms has acquired clients across the globe, in New Zealand, Australia, the Pacific Islands, Canada, The United Kingdom, Ireland and Korea. </Section01__Text>
              </Section01__TitleDiv>
          </Section01>
          <Section02>
              <Section__Container>
                  <Section__Title>About Us</Section__Title>
                  <HeaderLine />
                  <Section__Text>EasyForms is a 100% Kiwi owned and 
                  operated company which grew from one 
                  man’s passion for innovation and 
                  technology. Keith Archer wanted to create 
                  a company that would make a real 
                  difference to customers and their 
                  businesses. Not just one that said the right 
                  things, but that actually delivered.<br /><br />
                  In true Kiwi style, over a beer and brain 
                  storming session with a friend, Keith 
                  penned a business plan on the back of a 
                  beer coaster with a core purpose of 
                  reducing stacks of paperwork in the 
                  business environment. At the time, an 
                  electrician was tending to some electrical 
                  repairs in Keith’s home and overheard this 
                  discussion and piped up, that removing the 
                  stacks of paperwork involved in code of 
                  compliance forms would be a game-
                  changer. With that, Keith set out to 
                  establish EasyForms in March, 2013 from 
                  his home. Dave Rouse was brought on as 
                  Quality Assurance Director and business 
                  partner in July 2015 to drive strategy. The 
                  company has a marketing and sales team, 
                  an international division of 4, 7 directors 
                  and a total of 20 staff in our Auckland 
                  offices.<br /><br />

                  Over 4 years, EasyForms has acquired 
                  clients across the globe, in New Zealand, 
                  Australia, the Pacific Islands, Canada, The 
                  United Kingdom, Ireland and Korea. The 
                  company started out automating paper 
                  forms into app-based solutions and has 
                  now evolved to provide a complete solution 
                  for workflow management and develops 
                  bespoke web portal and app-based 
                  solutions.</Section__Text>
              </Section__Container>
          </Section02>
          <Section03>
              <Section__Container>
                  <Section__Title>Our Vision</Section__Title>
                  <HeaderLine />
                  <Section__Text>To provide you with better control and 
                  increased transparency of your business, 
                  while streamlining your workflow and job 
                  management processes. This increases 
                  productivity, reduces operational costs and 
                  ultimately saves you time so you can focus 
                  on the things you need to, while giving you 
                  the ability to mobilise your business 
                  effortlessly.</Section__Text>
              </Section__Container>
          </Section03>
      </div>
    </ThemeProvider>
)

const Section01 = styled.div`
  ${BlueBg};
  padding:40px 8%;
    ${breakpoint('lg')`
    padding:100px 15% 70px 15%;
  `}
`
const Section01__TitleDiv = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  margin:0 auto;
    ${breakpoint('lg')`
        max-width: 1200px;
    `}
`
const Section01__Title = styled.div`
  ${BigTitle};
  margin:40px 0 0 0;
`
const Section01__Text = styled.div`
  display:none;
    ${breakpoint('md')`
      display:block;
      ${Text};
      color:white;
      width:90%
      font-weight:300;
    `}
`
const Section02 = styled.div`
  padding:70px 8%;
  ${breakpoint('lg')`
    padding:70px 15%;
  `}
`
const Section03 = styled.div`
  padding:70px 8%;
  ${LightGreyBg};
  ${breakpoint('lg')`
    padding:70px 15%;
  `}
`
const Section__Container = styled.div`
  margin:0 auto;
  ${breakpoint('lg')`
      max-width: 1200px;
  `}
`
const Section__Title = styled.div`
  ${Title}
`
const Section__Text = styled.div`
  ${Text};
  font-size:${Themes.fontsize.p3};
  line-height:23px;
    ${breakpoint('lg')`
    ${Text};
    `}
`

export default AboutUsScreen;