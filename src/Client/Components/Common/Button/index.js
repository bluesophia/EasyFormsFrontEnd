import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Themes from '../../../../Assets/Styles/Themes';

const Shadow = css`
    box-shadow : 0 0 8px rgba(50, 50, 93, 0.23);
`
class Button extends Component {
    render(){
        return (
            <ThemeProvider theme={Themes}>
                {/* <Link href={this.props.link}> */}
                    <ButtonStyle>
                        <Text>{this.props.value}</Text>
                    </ButtonStyle>
                {/* </Link> */}
            </ThemeProvider>
        );
    }
}

Button.propTypes = {
    value: PropTypes.string,
    // link: PropTypes.link
  };
const ButtonStyle = styled.button`
    background:${Themes.background.yellowToOrange};
    width:100%;
    height:auto;
    color:${Themes.colors.blue};
    font-size:20px;
    font-weight:${Themes.fontWeight.black};
    border:0;
    border-radius:10px;
    text-transform:uppercase;
    padding-top:15px;
    padding-bottom:15px;
    letter-spacing:1px;
`
const Text = styled.p`
    margin:0;
    padding:0;
//    text-shadow:0 0 8px rgba(50, 50, 93, 0.23);
    text-shadow:0 0 8px rgba(255, 255, 255, 0.5);
`

export default Button;