import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';
import Text from '../../../Components/Common/Text';
import ToggleButton from '../../../../Assets/Images/arrow.png';




const QuestionStyle = css`
    font-size:${Themes.fontsize.h3};
    text-align:left;
    line-height:25px;
    color:${Themes.colors.blue};
    font-weight:${Themes.fontWeight.regular};
`
const BlogToggle2 = () => ({
    render: function(){
        return(
            <ThemeProvider theme={Themes}>
                <Container>
                    <QuestionDiv02>
                        <Question02>{this.props.question}</Question02>
                        <ArrowDiv02 onClick={this.toggle} className="arrowFlip02"><Arrow src={ToggleButton}/></ArrowDiv02>
                    </QuestionDiv02>
                    <AnswerDiv02 className="toggle02">
                        {this.props.answer}
                    </AnswerDiv02>
                </Container>
            </ThemeProvider>            
        )
    },
    toggle: function(){
        let answerToggle02 = document.querySelector('.toggle02');
        let arrowFlip02 = document.querySelector('.arrowFlip02');
          if (answerToggle02.style.display === 'none' && arrowFlip02.style.transform === 'rotateX(0deg)') {
            answerToggle02.style.display = 'block';
            arrowFlip02.style.transform = 'rotateX(180deg)';
          } else {
            answerToggle02.style.display = 'none';
            arrowFlip02.style.transform = 'rotateX(0deg)';
          }
       }
})

BlogToggle2.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string
  };

const Container = styled.div`
  position:relative;
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
const ArrowDiv02 = styled.div`
    width:20px;
    height:auto;
    transform:rotateX(0deg);
`
const Arrow02 = styled.img`
    width:20px;
    height:auto;
`
const AnswerDiv02 = styled.div`
  background-color:${Themes.colors.veryLightGrey};
  padding:30px 90px 30px 40px; 
  color:${Themes.colors.black};
  margin-bottom:3px;
  line-height:25px;
  display:none;
`
export default BlogToggle2;