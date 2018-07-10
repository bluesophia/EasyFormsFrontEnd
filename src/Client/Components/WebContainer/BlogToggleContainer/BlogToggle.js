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
                <Container>
                    <QuestionDiv>
                        <Question>{this.props.question}</Question>
                        <ArrowDiv><Arrow src={ToggleButton}/></ArrowDiv>
                    </QuestionDiv>
                </Container>
            </ThemeProvider>
        )
    }
}

BlogToggle.propTypes = {
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
export default BlogToggle;