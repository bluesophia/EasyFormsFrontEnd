import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Themes from '../../../../Assets/Styles/Themes';


class Button extends Component {
    render(){
        return (
            <ThemeProvider theme={Themes}>
                <ButtonStyle>contact us</ButtonStyle>
            </ThemeProvider>
        );
    }
}

const ButtonStyle = styled.button`
    background: linear-gradient(${Themes.colors.yellow}, ${Themes.colors.orange});
    width:100%;
    height:58px;
    color: white;
    font-size: 25px;
    font-weight: 700;
    border:0;
    border-radius:10px;
    text-transform:uppercase;
`

export default Button;