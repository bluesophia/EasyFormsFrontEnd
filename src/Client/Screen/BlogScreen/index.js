import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
<<<<<<< HEAD:src/Client/Screen/BlogScreen/index.js
import Themes from '../../../Assets/Styles/Themes';
import HeaderLine from '../../Components/Common/HeaderLine';
import Text from '../../Components/Common/Text';
import BigTitle from '../../Components/Common/Title/BigTitle.js';
import SectionBg from '../../../Assets/Images/blog_1.jpg';
// import BlogToggleContainer from '../../../Components/WebContainer/BlogToggleContainer';
import BlogToggle from '../../Components/WebContainer/BlogToggleContainer/BlogToggle';
import ToggleButton from '../../../Assets/Images/arrow.png';
=======
import Themes from '../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Components/Common/HeaderLine';
import BigTitle from '../../../Components/Common/Title/BigTitle.js';
import SectionBg from '../../../../Assets/Images/blog_1.jpg';
import { BlogToggleSec1, BlogToggleSec2 } from '../../../Components/WebContainer/BlogToggleContainer';
>>>>>>> commonmodule:src/Client/Screen/Web/BlogScreen/index.js

const BlogScreen = () => ({
  render: function(){
    return(
      <ThemeProvider theme={Themes}>
      <Container>
<<<<<<< HEAD:src/Client/Screen/BlogScreen/index.js
        <Section>
          <Section__Header>
=======

        {/* Section1 */}
        <Section>
          <Section__Header>
            {/* Title */}
>>>>>>> commonmodule:src/Client/Screen/Web/BlogScreen/index.js
            <Section__TitleDiv>
              <Section__Title>Is Timesheet Theft Giving You a Constant Headache?</Section__Title>
              <HeaderLine />
            </Section__TitleDiv>
<<<<<<< HEAD:src/Client/Screen/BlogScreen/index.js
            <Section__FirstBlog>
              <QuestionDiv onClick={this.toggle}>
                  <Question>Would you like to eliminate timesheet ambiguity?</Question>
                  <ArrowDiv className="arrowFlip" ><Arrow src={ToggleButton}/></ArrowDiv>
              </QuestionDiv>
            </Section__FirstBlog>
          </Section__Header>
            <Section__Contents>
                  <AnswerDiv className="toggle">{Blog01Answer01}</AnswerDiv>
                  <BlogToggle 
                    question={'So, What is Timesheet Theft Costing You?'}
                    answer={Blog01Answer02}
                    className="Blog01Answer02"/>
                  <BlogToggle 
                    question={'Timesheet Theft Is Not Always Deliberate'}
                    answer={Blog01Answer03}
                    className="Blog01Answer03"/>
                  <BlogToggle 
                    question={'How We Can Help'}
                    answer={Blog01Answer04}
                    className="Blog01Answer04"/>
                  <BlogToggle 
                    question={'We can help your business:'}
                    answer={Blog01Answer05}
                    className="Blog01Answer05"/>
            </Section__Contents>
        </Section>
        <Section>
          <Section__Header>
=======
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
>>>>>>> commonmodule:src/Client/Screen/Web/BlogScreen/index.js
            <Section__TitleDiv>
              <Section__Title>Are Mountains of Paperwork Dragging Your Business Down?</Section__Title>
              <HeaderLine />
            </Section__TitleDiv>
<<<<<<< HEAD:src/Client/Screen/BlogScreen/index.js
            <Section__FirstBlog>
              <QuestionDiv>
                  <Question onClick={this.toggle} >Do any of these words and phrases ring true for your business?'</Question>
                  <ArrowDiv className="arrowFlip" ><Arrow src={ToggleButton}/></ArrowDiv>
              </QuestionDiv>
            </Section__FirstBlog>
          </Section__Header>
            <Section__Contents>
             <AnswerDiv className="toggle">{Blog02Answer01}</AnswerDiv>
                  <BlogToggle 
                    question={'Well then, perhaps these words and phrases sound more appealing to you?'}
                    answer={Blog02Answer02}/>
                  <BlogToggle 
                    question={'So, what are mobile forms anyway?'}
                    answer={Blog02Answer03}/>
                  <BlogToggle 
                    question={'What’s the web app or web portal?'}
                    answer={Blog02Answer04}/>
                  <BlogToggle 
                    question={'“Barriers”, you say?'}
                    answer={Blog02Answer05}/>
                  <BlogToggle 
                    question={'Here’s a “portion” of how we can help your business:'}
                    answer={Blog02Answer06}/>
=======
          </Section__Header>
            {/* Contents */}
            <Section__FirstBlog>
            </Section__FirstBlog>
            <Section__Contents>
              <BlogToggleSec2 /> 
>>>>>>> commonmodule:src/Client/Screen/Web/BlogScreen/index.js
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
<<<<<<< HEAD:src/Client/Screen/BlogScreen/index.js
  box-sizing:border-box;
  width:100%;
  margin:4px auto 0 auto;
=======
   box-sizing:border-box;
   width:100%;
   margin:-96px auto 0 auto;
>>>>>>> commonmodule:src/Client/Screen/Web/BlogScreen/index.js
    ${breakpoint('md')`
    padding:0 20% 100px 20%;
     `}
 `

export default BlogScreen;