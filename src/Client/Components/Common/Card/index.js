import React, { Component } from 'react';
import styled from 'styled-components';
import DoubleQuatationMark from '../../../../Assets/Images/double-quatation-mark.png';
import Themes from '../../../../Assets/Styles/Themes';
import breakpoint from 'styled-components-breakpoint';

class Card extends Component {
            render () {
                return(
               <CardContainer>
                    <CardLogo src={this.props.logo} alt={this.props.companyName}></CardLogo>
                    <CardInfo>
                       <CardName>{this.props.name}</CardName>
                       <CardCompanyName>{this.props.companyName}</CardCompanyName>
                    </CardInfo>
                    <CardQuatation src={DoubleQuatationMark} alt="double quotation"/>
                    <CardText>
                        {this.props.text}
                    </CardText>
                </CardContainer>
            )}
        };

const CardContainer = styled.div`
    box-sizing:border-box;
    background-color: white;
    width:100%;
    height:400px;
    padding:5%;
    text-align:center;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    margin-bottom:30px;
    ${breakpoint('md')`
        height:480px;
        justify-content:center;
    `}
    ${breakpoint('lg')`
        width: 350px;
    `}
`
const CardInfo = styled.div`
height:20%;
display: flex;
flex-direction:column;
justify-content:center;
padding:5%;
`

const CardLogo = styled.img`
        width:auto;
        height:15%;     
        align-content: start;
        ${breakpoint('lg')`
    padding:5%;
    `}
`
const CardName = styled.p`
    font-size:${Themes.fontsize.h3};
    font-weight:${Themes.fontWeight.black};
    color:${Themes.colors.blue};
    padding:0;
`
const CardCompanyName = styled.p`
    font-size:${Themes.fontsize.p3};
    color:${Themes.colors.grey};
    line-height:20px;
    margin:0;
    padding:3% 0 0;
`
const CardQuatation = styled.img`
    margin: 5% 0;
`
const CardText = styled.div`
    color:${Themes.colors.grey};  
    font-weight:${Themes.fontWeight.light};
    font-size:${Themes.fontsize.p4};
    height:40%;
    padding:5% 0 0;
    ${breakpoint('md')`
    font-size:13px;
    `}
    ${breakpoint('lg')`
    font-size:${Themes.fontsize.p3};
    `}
`

export default Card;