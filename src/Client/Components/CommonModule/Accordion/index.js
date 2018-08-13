import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';
import './toggle.css';

/** Components **/
// import Text from '../../Components/Common/Text';

class Accordion extends Component {
    render() {
      const { title, content, expand, onClick } = this.props;
      return (
        <ThemeProvider theme={Themes}>
            <Container>
                <QuestionDiv>
                    <Question className={expand ? 'title is-expanded' : 'title'} onClick={onClick}>
                        {title}
                    </Question>   
                    <img className={expand ? 'arrowImg after' : 'arrowImg'} src={require('../../../../Assets/Images/arrow.png')} onClick={onClick}/>
                </QuestionDiv>
                    <dd className={expand ? 'content is-expanded' : 'content'} onClick={onClick}>
                        <p>{content}</p>
                    </dd>    
            </Container>  
        </ThemeProvider>
      );
    }
  }

const Container = styled.div`
`
const QuestionDiv = styled.div`
  height:80px;
  width:250px;
  background-color:${Themes.colors.veryLightGrey};
  padding:0 8%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  cursor: pointer;
  margin-bottom:0 !important;
  font-weight:${Themes.fontWeight.bold};
      ${breakpoint('md')`
      `}
    ${breakpoint('xs')`
        width:90%;
        padding:0 5%;
    `}
`
const Question = styled.div`
    font-size:${Themes.fontsize.p2};
    text-align:left;
    line-height:25px;
    color:${Themes.colors.blue};
    font-weight:${Themes.fontWeight.bold};
        ${breakpoint('md')`
            font-size:${Themes.fontsize.p1};
        `}
    margin-right:15px;
`
export default Accordion;