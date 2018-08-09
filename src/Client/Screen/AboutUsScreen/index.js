import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';
import HeaderLine from '../../Components/Common/HeaderLine';
import Text from '../../Components/Common/Text';

/** Images **/
import AboutSection01BgMd from '../../../Assets/Images/AboutSection01Bg.png';
import HomeSection01BgSm from '../../../Assets/Images/HomeSection01BgSm.png';
import mainImage from '../../../Assets/Images/AboutSection01Image.png';

/** components **/
import Title from '../../Components/Common/Title/Title';
import BigTitle from '../../Components/Common/Title/BigTitle';

class AboutUsScreen extends Component {
  render(){
    return(
      <ThemeProvider theme={Themes}>   
      <div>
            <Section01>
              <Section01__Container>             
                <Section01__TitleDiv>
                    <Section01__Title>Global clients around Us</Section01__Title>
                    <Section01__Text>Over 4 years, EasyForms has acquired clients across the globe, in New Zealand, Australia, the Pacific Islands, Canada, The United Kingdom, Ireland and Korea. </Section01__Text>
                </Section01__TitleDiv>
                <Section01__Image><MainImage src={mainImage}/></Section01__Image> 
              </Section01__Container>
            </Section01>
            <Section02>
                    <Section__Title>About Us</Section__Title>
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
            </Section02>
            <Section03>
                  <Section__Title>Our Vision</Section__Title>
                  <Section__Text>To provide you with better control and 
                  increased transparency of your business, 
                  while streamlining your workflow and job 
                  management processes. This increases 
                  productivity, reduces operational costs and 
                  ultimately saves you time so you can focus 
                  on the things you need to, while giving you 
                  the ability to mobilise your business 
                  effortlessly.</Section__Text>
            </Section03>
      </div>
    </ThemeProvider>
    )
  }
}
// const Section0102 = styled.div`
//     background-color:${Themes.colors.veryLightGrey};
// `
const Section01 = styled.div`
  margin:0;
  background: url('${HomeSection01BgSm}');
  background-position:center top;
  background-repeat:no-repeat;
  background-size:100% 100%;
  ${breakpoint('md')`
      background: url('${AboutSection01BgMd}');
      background-position:left top;
      background-repeat:no-repeat;
      background-size:100% 100%;     
  `}
  ${breakpoint('lg')`
      background-size:100% 90%;
  `}
`
const Section01__Container = styled.div`
  padding:18% 8% 10% 8%;
  display:flex;
  flex-direction:column;
  align-items:center;
      ${breakpoint('md')`
          padding:5% 10% 8% 10%;
          justify-content:space-between;
          flex-direction:row;
          align-items:flex-start;           
      `}
      ${breakpoint('lg')`
          max-width: 1366px;
          margin:0 auto;
          padding: 70px 8% 30px 8%;
          align-items:flex-start; 
      `}
`
const Section01__Image = styled.div`
    width:100%;
        ${breakpoint('md')`
            margin-left:0;
        `}
`
const MainImage = styled.img`
    width:inherit;
    height:auto;
`
const Section01__TitleDiv = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;
  margin:0 auto;
    ${breakpoint('md')`
      align-items:flex-start;
      width:100%;
      margin:0 40px 0 0;
    `}
    ${breakpoint('lg')`
      margin-top:50px;
    `}
`
const Section01__Title = styled.div`
  ${BigTitle};
  color:white;
  text-align:center;
  margin:0 10% 40px 10%;
    ${breakpoint('md')`
        text-align:left;
        margin:0px 20px 20px 0px;     
    `}
    ${breakpoint('lg')`
    `}
`
const Section01__Text = styled.div`
  display:none;
    ${breakpoint('md')`
      display:block;
      ${Text};
      font-size:${Themes.fontsize.p2} !important;
      line-height:22px !important;
      color:white;
      font-weight:${Themes.fontWeight.light};
    `}
    ${breakpoint('lg')`
      font-size:${Themes.fontsize.p1} !important;
      line-height:28px !important;  
    `}
`
const Section02 = styled.div`
  padding:70px 8%;
  ${breakpoint('lg')`
    padding:70px 15%;
    display:grid;
    grid-template-columns:25% 75%;
    max-width: 1366px;
  `}
`
const Section03 = styled.div`
  padding:70px 8%;
  background-color:${Themes.colors.veryLightGrey};
  ${breakpoint('lg')`
    padding:70px 15%;
    display:grid;
    grid-template-columns:25% 75%;
    max-width: 1366px;
  `}
`
const Section__Title = styled.div`
  ${Title};
  margin-bottom:40px;
  ${breakpoint('lg')`
    text-align:left;
  `}
`
const Section__Text = styled.div`
  ${Text};
  font-size:${Themes.fontsize.p3};
  line-height:23px;
`

export default AboutUsScreen;