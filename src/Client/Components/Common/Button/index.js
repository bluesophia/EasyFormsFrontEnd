import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Themes from '../../../../Assets/Styles/Themes';
import { Link } from 'react-router-dom';

import breakpoint from 'styled-components-breakpoint';

const Shadow = css`
    box-shadow : 0 0 8px rgba(50, 50, 93, 0.23);
`
class Button extends Component {
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

Button.propTypes = {
    value: PropTypes.string
  };
const ButtonStyle = styled.button`
    background:${Themes.background.yellowToOrange};
    width:100%;
    height:auto;
    color:${Themes.colors.blue};
    font-size: 1em;
    font-weight:${Themes.fontWeight.black};
    border:0;
    border-radius:10px;
    text-transform:uppercase;
    padding: 15px;
    letter-spacing:1px;
    ${breakpoint('md')`
            font-size:20px;
        `}
`
const Text = styled.p`
    margin:0;
    padding:0;
//    text-shadow:0 0 8px rgba(50, 50, 93, 0.23);
    text-shadow:0 0 8px rgba(255, 255, 255, 0.5);
`

export default Button;