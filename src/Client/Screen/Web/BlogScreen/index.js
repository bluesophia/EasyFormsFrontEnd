import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Components/Common/HeaderLine';
import BigTitle from '../../../Components/Common/Title/BigTitle.js';
import SectionBg from '../../../../Assets/Images/blog_1.jpg';
import { BlogToggleSec1, BlogToggleSec2 } from '../../../Components/WebContainer/BlogToggleContainer';

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

        {/* Section1 */}
        <Section>
          <Section__Header>
            {/* Title */}
            <Section__TitleDiv>
              <Section__Title>Is Timesheet Theft Giving You a Constant Headache?</Section__Title>
              <HeaderLine />
            </Section__TitleDiv>
          </Section__Header>
            {/* Contents */}
            <Section__FirstBlog>
            </Section__FirstBlog>
            <Section__Contents>
              <BlogToggleSec1 /> 
            </Section__Contents>
        </Section>

        {/* Section2 */}
        <Section>
          <Section__Header>
            {/* Title */}
            <Section__TitleDiv>
              <Section__Title>Are Mountains of Paperwork Dragging Your Business Down?</Section__Title>
              <HeaderLine />
            </Section__TitleDiv>
          </Section__Header>
            {/* Contents */}
            <Section__FirstBlog>
            </Section__FirstBlog>
            <Section__Contents>
              <BlogToggleSec2 /> 
            </Section__Contents>
        </Section>
      </Container>
    </ThemeProvider>
    )
  },
}
)
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
const Section__Header = styled.div`
  display:flex;
  justify-content:center;
  flex-direaction:coulmn;
  background:linear-gradient(rgba(8,39,90), rgba(8,39,90,0.4)), url(${SectionBg});
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
const Section__TitleDiv = styled.div`
  padding-right:8%;
  padding-left:8%;
  ${breakpoint('md')`
    margin-bottom:40px;
  `}
`
const Section__Title = styled.div`
  ${BigTitle};
  font-size:30px;
  ${breakpoint('md')`
    ${BigTitle};
    font-size:35px;
  `}
`
const Section__FirstBlog = styled.div`
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
const Section__Contents = styled.div`
   box-sizing:border-box;
   width:100%;
   margin:-96px auto 0 auto;
    ${breakpoint('md')`
    padding:0 20% 100px 20%;
     `}
 `

export default BlogScreen;