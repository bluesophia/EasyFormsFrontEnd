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
                    <CardName>{this.props.name}</CardName>
                    <CardCompanyName>{this.props.companyName}</CardCompanyName>
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
    width:auto;
    height:440px;
    padding:8%;
    text-align:center;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    margin-bottom:30px;
    ${breakpoint('md')`
        width:380px;
        height:460px;
    `}
`
const CardLogo = styled.img`
        width:180px;
        height:auto;     
        padding:0;
`
const CardName = styled.p`
    font-size:${Themes.fontsize.h3};
    font-weight:${Themes.fontWeight.black};
    color:${Themes.colors.blue};
    padding:20px 0 0 0;
`
const CardCompanyName = styled.p`
    font-size:${Themes.fontsize.p3};
    color:${Themes.colors.grey};
    line-height:20px;
    margin:6px 0 0 0;
    padding:0;
`
const CardQuatation = styled.img`
    margin: 30px 0 10px 0;
`
const CardText = styled.div`
    color:${Themes.colors.grey};  
    font-weight:${Themes.fontWeight.light};
    font-size:${Themes.fontsize.p4}; 
    padding-bottom:8%;
    ${breakpoint('sm')`
      font-size:${Themes.fontsize.p3}; 
    `}
`

export default Card;