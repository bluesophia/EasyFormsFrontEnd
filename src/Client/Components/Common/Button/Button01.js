import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import Themes from '../../../../Assets/Styles/Themes';
import { Link } from 'react-router-dom';

class Button01 extends Component {
    render(){
        return (
            <ThemeProvider theme={Themes}>
                    <ButtonStyle>
                        <Text>{this.props.value}</Text>
                    </ButtonStyle>
            </ThemeProvider>
        );
    }
}

Button01.propTypes = {
    value: PropTypes.string
  };
const ButtonStyle = styled.button`
    background:linear-gradient(${Themes.colors.yellow},${Themes.colors.orange});
    width:auto; 
    height:auto;
    color:white;
    font-size:1em;
    border:0;
    border-radius:50px;
    padding:15px 30px;
    letter-spacing:1px;
    outline: none;
    ${breakpoint('md')`
    font-size:20px;
    `}
`
const Text = styled.p`
    margin:0;
    padding:0;
`

export default Button01;