import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';

/** Components**/
import BigTitle from '../../Components/Common/Title/BigTitle.js';
import { BlogToggleSec1, BlogToggleSec2 } from '../../Components/WebContainer/BlogToggleContainer';

/** Images **/
import SectionBg01 from '../../../Assets/Images/BlogSection01Bg.png';
import SectionBg02 from '../../../Assets/Images/BlogSection02Bg.png';
import Image01 from '../../../Assets/Images/BlogSection01Image.png';
import Image02 from '../../../Assets/Images/BlogSection02Image.png';

class BlogScreen extends Component {
  render(){
    return(
        <ThemeProvider theme={Themes}>
          <Container>
            <Section>
              <Section__Header01>
                <Section__HeaderContainer>
                  <Section__TitleDiv>
                    <Section__Title>Is Timesheet Theft Giving You a Constant Headache?</Section__Title>
                  </Section__TitleDiv>
                  <Section__ImageDiv>
                    <Section__Image src={Image01}/>
                  </Section__ImageDiv>
                </Section__HeaderContainer>
              </Section__Header01>
              <Section__Container>
                <Section__Contents>
                  <BlogToggleSec1 /> 
                </Section__Contents>
              </Section__Container>
            </Section>
            <Section>
              <Section__Header02>
                <Section__HeaderContainer>
                  <Section__TitleDiv>
                    <Section__Title>Are Mountains of Paperwork Dragging Your Business Down?</Section__Title>
                  </Section__TitleDiv>
                  <Section__ImageDiv>
                    <Section__Image src={Image02}/>
                  </Section__ImageDiv>
                </Section__HeaderContainer>
              </Section__Header02>
              <Section__Container>
                <Section__Contents>
                  <BlogToggleSec2 /> 
                </Section__Contents>
              </Section__Container>
            </Section>
          </Container>
      </ThemeProvider>
    )
  }
}

const Container = styled.div`
    position:relative;
`
const Section = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  ${breakpoint('md')`
  `}
`
const Section__Header01 = styled.div`
  background:url(${SectionBg01}) no-repeat center top;
  background-size:cover;
  padding:18% 0;
  ${breakpoint('md')`
    padding:8% 0;
  `}
  ${breakpoint('lg')`
    padding:5% 10% 0 10%;
    background-size:cover 100%;
  `}
`
const Section__Header02 = styled.div`
  background:url(${SectionBg02}) no-repeat center top;
  background-size:cover;
  padding:18% 0;
  ${breakpoint('md')`
    padding:8% 0;
  `}
  ${breakpoint('lg')`
    padding:5% 10% 0 10%;
    background-size:100% 330px;
  `}
`
const Section__HeaderContainer = styled.div`
  max-width:1366px;
  margin:0 auto;
  ${breakpoint('md')`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
  `}
  ${breakpoint('lg')`
    flex-direction:row;
    position:relative;
  `}
`
const Section__Container = styled.div`
  ${breakpoint('lg')`
    max-width:1366px;
    padding:0 10%;
    margin:0 auto;
  `}
`
const Section__TitleDiv = styled.div`
  padding-right:8%;
  padding-left:8%;
  ${breakpoint('md')`
  `}
  ${breakpoint('lg')`
    padding:0;
    margin-left:0;
  `}
`
const Section__Title = styled.div`
    ${BigTitle};
    color:white;
    font-weight:${Themes.fontWeight.regular};
    ${breakpoint('md')`
      ${BigTitle};
      font-weight:${Themes.fontWeight.regular};
      color:white;
    `}
    ${breakpoint('lg')`
      text-align:left;
      width:90%;
    `}
  `
 const Section__ImageDiv = styled.div`  
    display:none;
    ${breakpoint('md')`
     `}
     ${breakpoint('lg')`
     display:block;
     margin-bottom:-140px;
     `}
`
const Section__Image = styled.img`
   ${breakpoint('md')`
   `}
`
const Section__Contents = styled.div`
   box-sizing:border-box;
   width:100%;
   margin:0 auto;
    ${breakpoint('md')`
    padding:30px 10% 100px 10%;
     `}
     ${breakpoint('lg')`
     width:60%;
     padding:30px 0 100px 0;
     margin:0 auto 0 0;
   `}
 `
export default BlogScreen;