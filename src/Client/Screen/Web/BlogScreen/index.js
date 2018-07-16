import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Components/Common/HeaderLine';
import Text from '../../../Components/Common/Text';
import BigTitle from '../../../Components/Common/Title/BigTitle.js';
import Section01Bg from '../../../../Assets/Images/blog_1.jpg';
import { BlogToggleSec1, BlogToggleSec2 } from '../../../Components/WebContainer/BlogToggleContainer/';
import ToggleButton from '../../../../Assets/Images/arrow.png';
import Accordion from '../../../Components/CommonModule/Toggle';

const QuestionStyle = css`
    font-size:${Themes.fontsize.h3};
    text-align:left;
    line-height:25px;
    color:${Themes.colors.blue};
    font-weight:${Themes.fontWeight.regular};
`
const BlogScreen = () => ({
  render: function(){
    return(
      <ThemeProvider theme={Themes}>
      <Container>
        <Section01>
          <Section01__Header>
            <Section01__TitleDiv>
              <Section01__Title>Is Timesheet Theft Giving You a Constant Headache?</Section01__Title>
              <HeaderLine />
            </Section01__TitleDiv>
            <Section01__FirstBlog>
              <QuestionDiv>
                  <Question>Would you like to eliminate timesheet ambiguity?</Question>
                  <ArrowDiv onClick={this.toggle} className="arrowFlip" ><Arrow src={ToggleButton}/></ArrowDiv>
              </QuestionDiv>
            </Section01__FirstBlog>
          </Section01__Header>
            <Section01__Contents>
                  <BlogToggleSec1 /> 
            </Section01__Contents>
        </Section01>
        <Section01>
          <Section01__Header>
            <Section01__TitleDiv>
              <Section01__Title>Are Mountains of Paperwork Dragging Your Business Down?</Section01__Title>
              <HeaderLine />
            </Section01__TitleDiv>
            <Section01__FirstBlog>
              <QuestionDiv>
                  <Question>Do any of these words and phrases ring true for your business?'</Question>
                  <ArrowDiv onClick={this.toggle} className="arrowFlip" ><Arrow src={ToggleButton}/></ArrowDiv>
              </QuestionDiv>
            </Section01__FirstBlog>
          </Section01__Header>
            <Section01__Contents>
             <BlogToggleSec2 />
            </Section01__Contents>
            {/* Toggle */}

            

            {/* <Toggle /> */}
        </Section01>
      </Container>
    </ThemeProvider>
    )
  },
    toggle: function(){
      let answerToggle = document.querySelector('.toggle');
      let arrowFlip = document.querySelector('.arrowFlip');
        if (answerToggle.style.display === 'none' && arrowFlip.style.transform === 'rotateX(0deg)') {
          answerToggle.style.display = 'block';
          arrowFlip.style.transform = 'rotateX(180deg)';
        } else {
          answerToggle.style.display = 'none';
          arrowFlip.style.transform = 'rotateX(0deg)';
        }
     }
}

)

const Container = styled.div`
    position:relative;
`
const Section01 = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  ${breakpoint('md')`
  `}
`
const Section01__Header = styled.div`
  display:flex;
  justify-content:center;
  flex-direaction:coulmn;
  background:linear-gradient(rgba(8,39,90), rgba(8,39,90,0.4)), url(${Section01Bg});
  background-size:cover;
  padding-top:100px;
  padding-bottom:80px;
  position:relative;
  ${breakpoint('md')`
    padding-top:180px;
    width:100%;
    background-position:center-top;
  `}
`
const Section01__TitleDiv = styled.div`
  padding-right:8%;
  padding-left:8%;
  ${breakpoint('md')`
    margin-bottom:40px;
  `}
`
const Section01__Title = styled.div`
  ${BigTitle};
  font-size:30px;
  ${breakpoint('md')`
    ${BigTitle};
    font-size:35px;
  `}
`
const Section01__FirstBlog = styled.div`
  width:100%;
  padding:0;
  margin-bottom:-4px;
  position:absolute;
  bottom:0;
    ${breakpoint('md')`
    padding:0 20%;
    width:60%;
  `}
`
const Section01__Contents = styled.div`
  box-sizing:border-box;
  width:100%;
  margin:4px auto 0 auto;
    ${breakpoint('md')`
    padding:0 20% 100px 20%;
    `}
`

const QuestionDiv = styled.div`
  height:80px;
  background-color:#EEEEEE;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0 8%;
  margin-bottom:3px;
    ${breakpoint('lg')`
    padding:0 5%;
    `}
`
const Question = styled.div`
  width:250px;
  ${QuestionStyle};
    ${breakpoint('lg')`
        width:100%;
        ${QuestionStyle};
        text-align:left;
        font-weight:${Themes.fontWeight.bold};
    `}
`
const ArrowDiv = styled.div`
    width:20px;
    height:auto;
    transform:rotateX(0deg);
`
const Arrow = styled.img`
    width:20px;
    height:auto;
`
const AnswerDiv = styled.div`
  background-color:${Themes.colors.veryLightGrey};
  padding:30px 90px 30px 40px; 
  color:${Themes.colors.black};
  margin-bottom:3px;
  line-height:25px;
  display:none;
`

const Section02 = styled.div`
`

export default BlogScreen;