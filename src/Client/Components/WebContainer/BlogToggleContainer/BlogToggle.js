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
  
class BlogToggle extends Component{
    render(){
        return(
            <ThemeProvider theme={Themes}>
                <QuestionDiv>
                    <Question>{this.props.question}</Question>
                    <ArrowDiv><Arrow src={ToggleButton}/></ArrowDiv>
                </QuestionDiv>
            </ThemeProvider>
        )
    }
}

BlogToggle.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string
  };

const QuestionDiv = styled.div`
  height:80px;
  background-color:#EEEEEE;
  display:flex;
  justify-content:space-between;
  align-items:center;
  ${QuestionStyle};
  padding:0 8%;
  margin-bottom:3px;
`
const Question = styled.div`
  width:250px;
`
const ArrowDiv = styled.div``
const Arrow = styled.img`
`
export default BlogToggle;