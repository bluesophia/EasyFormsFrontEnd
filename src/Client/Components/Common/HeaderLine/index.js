import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Themes from '../../../../Assets/Styles/Themes';
import breakpoint from 'styled-components-breakpoint';


class HeaderLine extends Component {
    render(){
        return (
            <ThemeProvider theme={Themes}>
                <Line></Line>
            </ThemeProvider>
        );
    }
}

const Line = styled.hr`
    width:120px;
    margin:25px auto 20px;
    border-top:0;
    border-left:0;
    border-right:0;
    border-bottom:5px solid ${Themes.colors.yellow};
    ${breakpoint('md')`
    margin:35px auto;
    `}
`

export default HeaderLine;