import React, { Component } from 'react';
import styled, { injectGlobal, css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../../Assets/Styles/Themes';

class FeaturesCard extends Component {
            render () {
                return(
                <Section05__Card className="cardDisplay">
                    <Section05__CardCircle>
                        <FontAwesomeIcon icon={this.props.iconName} style={{color:'white'}} size="2x"/>
                    </Section05__CardCircle>
                    <Section05__CardTitle>{this.props.title}</Section05__CardTitle>
                    <Section05__CardText>{this.props.text}</Section05__CardText>
                </Section05__Card>
            )}
        };

    const Shadow = css`
    box-shadow : 0 0 8px rgba(50, 50, 93, 0.23);
`
    const Section05__Card = styled.div`
        width:264px;
        height:400px;
        background-color:white;
        margin:10px;
        margin-top:20px;
        padding: 35px 20px;
        box-sizing: border-box;
        ${Shadow};
            ${breakpoint('lg')`
                margin-top:55px;
            `}
    `
    const Section05__CardCircle = styled.div`
        width:87px;
        height:87px;
        border-radius:50%;
        background:linear-gradient(${Themes.colors.blueLight},${Themes.colors.blue});
        margin:auto; 
        display: flex;
        justify-content:center;
        align-items: center;
    `
    const Section05__CardTitle = styled.p`
        color:${Themes.colors.blue};
        font-size:${Themes.fontsize.p2};
        font-weight:${Themes.fontWeight.black};
        text-align:center;
        margin:20px 0 30px 0;
        line-height:23px;
    `
    const Section05__CardText = styled.p`
        color:${Themes.colors.black};
        font-size:${Themes.fontsize.p4};
        text-align:center;
        line-height:15px;
    `

export default FeaturesCard;