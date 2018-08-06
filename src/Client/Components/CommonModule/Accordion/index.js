import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';
import Text from '../../../Components/Common/Text';
import './toggle.css';

const QuestionStyle = css`
    font-size:${Themes.fontsize.h3};
    text-align:left;
    line-height:25px;
    color:${Themes.colors.blue};
    font-weight:${Themes.fontWeight.regular};
`

class Accordion extends Component {
    render() {
      const { title, content, expand, onClick, question, description } = this.props;
      return (
        <ThemeProvider theme={Themes}>
            <Container>
                <QuestionDiv02 >
                <dt className={expand ? 'title is-expanded' : 'question'} onClick={onClick}>
                    {question}
                </dt>   
                <img className={expand ? 'arrowImg after' : 'arrowImg'} src={require('../../../../Assets/Images/arrow.png')} onClick={onClick}/>
                </QuestionDiv02>
                <dd className={expand ? 'content is-expanded' : 'content'} onClick={onClick}>
                    <p>{description}</p>
                </dd>    
            </Container>  
        </ThemeProvider>
      );
    }
  }

const Container = styled.div`
  position:relative;
`
const QuestionDiv = styled.dt`
  height:80px;
  background-color:#EEEEEE;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0 8%;
  margin-bottom:3px;
    ${breakpoint('xs')`
    padding:0 5%;
    `}
    ${breakpoint('sm')`
    padding:0 5%;
    `}
    ${breakpoint('md')`
    padding:0 22%;
    `}
    ${breakpoint('lg')`
    padding:0 5%;
    `}
    ${breakpoint('xl')`
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
`
const Arrow = styled.img`
    width:20px;
    height:auto;
`
const AnswerDiv = styled.div`
  background-color:${Themes.colors.veryLightGrey};
  padding:30px 95px 30px 40px; 
  color:${Themes.colors.black};
  margin-bottom:3px;
  line-height:25px;  
`

const QuestionDiv02 = styled.div`
  height:80px;
  width:250px;
  background-color:#EEEEEE;
  padding:0 8%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  cursor: pointer;
  position: relative;
  ${QuestionStyle};
    ${breakpoint('lg')`
        width:90%;
        padding:0 5%;
        ${QuestionStyle};
        text-align:left;
        font-weight:${Themes.fontWeight.bold};
    `}
    ${breakpoint('xs')`
        width:90%;
        padding:0 5%;
        ${QuestionStyle};
        text-align:left;
        font-weight:${Themes.fontWeight.bold};
    `}
    ${breakpoint('sm')`
        width:90%;
        padding:0 5%;
        ${QuestionStyle};
        text-align:left;
        font-weight:${Themes.fontWeight.bold};
    `}
    ${breakpoint('md')`
        width:90%;
        padding:0 5%;
        ${QuestionStyle};
        text-align:left;
        font-weight:${Themes.fontWeight.bold};
        font-size: ${Themes.fontsize.p3};
    `}
    ${breakpoint('lg')`
        width:90%;
        padding:0 5%;
        ${QuestionStyle};
        text-align:left;
        font-weight:${Themes.fontWeight.bold};
        
    `}
    ${breakpoint('xl')`
        width:90%;
        padding:0 5%;
        ${QuestionStyle};
        text-align:left;
        font-weight:${Themes.fontWeight.bold};
    `}
`

const Question02 = styled.div`
  width:250px;
  ${QuestionStyle};
    ${breakpoint('lg')`
        width:100%;
        ${QuestionStyle};
        text-align:left;
        font-weight:${Themes.fontWeight.bold};
    `}
`
export default Accordion;