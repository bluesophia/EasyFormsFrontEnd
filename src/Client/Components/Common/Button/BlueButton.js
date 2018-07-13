import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Themes from '../../../../Assets/Styles/Themes';

const Shadow = css`
    box-shadow : 0 0 8px rgba(50, 50, 93, 0.23);
`
class BlueButton extends Component {
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

BlueButton.propTypes = {
    value: PropTypes.string
  };
const ButtonStyle = styled.button`
    background:${Themes.background.blueLightToBlue};
    width:100%;
    height:auto;
    color:white;
    font-size:20px;
    font-weight:${Themes.fontWeight.bold};
    border:0;
    border-radius:10px;
    text-transform:uppercase;
    padding-top:15px;
    padding-bottom:15px;
    letter-spacing:1px;
`
const Text = styled.p`
    margin:0;
    text-shadow:0 0 8px rgba(50, 50, 93, 0.23);
`

export default BlueButton;