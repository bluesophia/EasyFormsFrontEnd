import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Components/Common/HeaderLine';
import Text from '../../../Components/Common/Text';
import BigTitle from '../../../Components/Common/Title/BigTitle.js';
import Section01Bg from '../../../../Assets/Images/blog_1.jpg';
import BlogToggle from './BlogToggle'

  
class BlogToggleContainer extends Component{
    render(){
        return(
            <ThemeProvider theme={Themes}>
            <Container>
              <Section01>
                <Section01__Header>
                  <Section01__TitleDiv>
                    <Section01__Title>{this.props.title}</Section01__Title>
                    <HeaderLine />
                  </Section01__TitleDiv>
                  <Section01__FirstBlog>
                    <BlogToggle 
                      question={'Would you like to eliminate timesheet ambiguity?'}
                      answer={'test01'}/>
                  </Section01__FirstBlog>
                </Section01__Header>
                  <Section01__Contents>
                    {/* <BlogToggle qna={this.props.qna}/>  */}
                        <BlogToggle 
                          question={'So, What is Timesheet Theft Costing You?'}/>
                        <BlogToggle 
                          question={'Timesheet Theft Is Not Always Deliberate'}/>
                        <BlogToggle 
                          question={'How We Can Help'}/>
                        <BlogToggle 
                          question={'We can help your business:'}/>
                  </Section01__Contents>
              </Section01>
            </Container>
          </ThemeProvider>
        )
    }
}

BlogToggleContainer.propTypes = {
    title: PropTypes.string,
    qna: PropTypes.array
  };

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
const Section02 = styled.div`
`

export default BlogToggleContainer;