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
const BlogToggle = () => ({
    render: function(){
        return(
            <ThemeProvider theme={Themes}>
                <Container>
                    <QuestionDiv02>
                        <Question02 onClick={this.toggle}>{this.props.question}</Question02>
                        <ArrowDiv02 className="arrowFlip02"><Arrow src={ToggleButton}/></ArrowDiv02>
                    </QuestionDiv02>
                    <AnswerDiv02 className={this.props.className}>
                        {this.props.answer}
                    </AnswerDiv02>
                </Container>
            </ThemeProvider>            
        )
    },
    toggle: function(){
        let Blog01Answer02 = document.querySelector('.Blog01Answer02');   
        let arrowFlip = document.querySelector('.arrowFlip02');
          if (Blog01Answer02.style.display === 'none' && arrowFlip.style.transform === 'rotateX(0deg)') {
            Blog01Answer02.style.display = 'block';
            arrowFlip.style.transform = 'rotateX(180deg)';
          } else {
            Blog01Answer02.style.display = 'none';
            arrowFlip.style.transform = 'rotateX(0deg)';
          };
       }
})

BlogToggle.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string,
    className: PropTypes.string
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
    width:40px;
    height:40px;
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
export default BlogToggle;