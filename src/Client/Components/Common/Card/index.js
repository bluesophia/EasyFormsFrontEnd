import React, { Component } from 'react';
import styled from 'styled-components';
import DoubleQuatationMark from '../../../../Assets/Images/double-quatation-mark.png';
import Themes from '../../../../Assets/Styles/Themes';

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
    background-color: white;
    width:300px;
    height: 350px;
    padding:30px;
    text-align:center;
    border: 1px solid black;
`

const CardLogo = styled.img`
`

const CardName = styled.p`
    font-size:${Themes.fontsize.h3};
    font-weight:${Themes.fontWeight.black};
    color:${Themes.colors.blue};
    margin-bottom:0;
`
const CardCompanyName = styled.p`
    font-size:${Themes.fontsize.p3};
    color:${Themes.colors.grey};
    line-height:20px;
    margin:6px 0 0 0;
    padding:0 55px;
`
const CardQuatation = styled.img`
    margin: 30px 0 18px 0;
`
const CardText = styled.div`
    color:${Themes.colors.grey};    
`

export default Card;